import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import SearchFilter from './SearchFilter/SearchFilter';
import SearchResultItem from './SearchResultItem/SearchResultItem';
import Pagination from './Pagination/Pagination';
import SolrQueryBuilder from './Helpers/SolrQueryBuilder';
import SearchConfig from './Helpers/Config';
import PersonaSearchFilter from './PersonaSearchFilter/PersonaSearchFilter';

import ArrayHelper from './Helpers/ArrayHelper';
// import DidYouMean from './DidYouMean/DidYouMean';


//const SEARCH_CHARACTERS_LIMIT = 100;
const SEARCH_MAX_WORK_LIMIT = 20
const RESULT_PER_PAGE = 18

//TODO interface the state
interface IAppState {
  searchKeyword: string,

  didYouMean: string[],
  showDidYouMean: boolean,

  searchResult: any,
  isLoading: boolean,
  isDirty: boolean,
  params: {
    facetField: string[],
    filterQuery: string[]
  },
  inputSearchStatistics: any,
  spellcheck: any,
  highlighting: any,
  currentPage: number
}

interface IAppProps { }

export default class App extends React.Component<IAppProps, IAppState> {
  // readonly HowManyCharYouWantToSearch:string  = '';

  state: any = {
    searchKeyword: '',

    didYouMean: [],
    showDidYouMean: false,

    searchResult: null,
    isLoading: false,
    isDirty: false,
    params: {
      facetField: ["rulesRegulationTopic_str", "rulesRegulationType_str"],
      filterQuery: []
    },
    inputSearchStatistics: null,
    spellcheck: '',
    highlighting: null,
    currentPage: 0
  };

  componentDidMount() {

    this.search()

    let q = this.getSearchParam('q');
    if (q) {
      this.setState({ searchKeyword: q }, () => {
        this.search()
      });
    }
  }




  onClickDidYouMean = () => {
    this.setState({
      searchKeyword: this.state.didYouMean.join(" "),
      didYouMean: [],
      showDidYouMean: false
    }, () => this.search())
  }

  getSearchKeywordStatistics = () => {
    return {
      limitWord: this.getFirstWordAfterLimitExceeded(),
      numberOfWords: this.countSearchKeyword(),
      maxWordLimit: SEARCH_MAX_WORK_LIMIT,
    }
  }

  //TODO: Create string extentions for manipulating strings
  private countSearchKeyword = () => {
    return this.state.searchKeyword.trim().split(/\s+/).length;
  }
  //TODO: Create string extentions for manipulating strings
  private getWords = (n: number) => {
    return this.state.searchKeyword.trim().split(/\s+/).slice(0, n).join(' ');
  }
  //TODO: Create string extentions for manipulating strings
  private getFirstWordAfterLimitExceeded = () => {
    if (this.countSearchKeyword() <= this.state.SEARCH_MAX_WORK_LIMIT)
      return '';
    return this.state.searchKeyword.trim().split(/\s+/)[SEARCH_MAX_WORK_LIMIT];
  }


  search = (start: number = 0, rows: number = 18) => {
    console.log()
    let queryInputString = (this.state.searchKeyword != null && this.state.searchKeyword)
      ? this.state.searchKeyword.trim().replace(/[^a-z \u0621-\u064A 0-9.,?""""]/gi, '').split(/\s+/).slice(0, SEARCH_MAX_WORK_LIMIT).join(' ')
      : this.state.searchKeyword;

    //TODO: using get number of word method
    if (queryInputString.length >= 300)
      queryInputString = queryInputString.slice(0, 300);

    if (queryInputString === "") {
      queryInputString = '*'
    }

    let builder: SolrQueryBuilder = new SolrQueryBuilder({
      origin: SearchConfig.solrUrl,
      lang: SearchConfig.pageLanguage,
      searchTerm: queryInputString,
      rows: rows,
      start: start,
      filterQuery: this.state.params.filterQuery,
      facetField: this.state.params["facetField"]
    });

    // show loader
    this.setState({ isLoading: true });

    builder.executePostQuery()
      .then(res => {
        // hide loader
        this.setState({ isLoading: false });
        return res.json();
      })
      .then(result => {
        this.setState({
          searchResult: result,
          isDirty: true
        })
      })
      .catch((err) => console.log(err));

  }

  clearAll = () => {
    var newParams = this.state.params;
    newParams.filterQuery = [];
    this.setState({ params: newParams }, () => {
      document.querySelectorAll('.search-filters .accordion.filter-accordion input[type="checkbox"]').forEach((checkbox: any) => {
        checkbox.checked = false;
      });
    });
    this.search();
  }

  onFilterItemChange = (event: any, filterName: string) => {
    let newParam = this.state.params;
    //if(newParam.filterQuery == null) newParam.filterQuery = [];

    if (event.target.checked) {
      //add filter
      newParam.filterQuery.push(event.target.value);
      // console.log("Checked newParam", newParam);
      this.setState({ params: newParam }, () => {
        //console.log("newParam.filterQuery", newParam.filterQuery);
      });

    } else {

      newParam.filterQuery = (newParam.filterQuery).filter((item: any) => {
        return item !== event.target.value
      });

      this.setState({ params: newParam }, () => {
        //console.log("newParam.filterQuery", newParam.filterQuery);
      });
    }
    this.search();
  }

  onChangeSearchKeyword = (event: any) => {
    this.setState({
      searchKeyword: event.target.value
    })
  }

  doSearch = (start?:number, rows?:number) => this.setState({ currentPage:0 }, () => {
    this.search(start,rows)
  })

  onPaginationChange = (pageNumber:number, start?:number, rows?:number) => {
    this.setState({ currentPage:pageNumber }, () => this.search(start,rows))
  }


  getSearchParam = (name: string) => {
    // This code support IE deplecated 
    // var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    // if (results == null){
    //    return null;
    // }
    // else {
    //    return decodeURI(results[1]) || 0;
    // }
    return new URLSearchParams(window.location.search).get("q");

  };

  setSearchParam = (q: string) => {
    this.setState({ searchKeyword: q }, () => {
      let searchParams = new URLSearchParams();
      searchParams.set("q", q);
    })
  };

  Spellcheck = () => {
    const { suggestions } = this.state.spellcheck
    let searchTermCorrection = this.state.searchKeyword.toLowerCase()

    const suggetionsCunck = ArrayHelper.chunk(suggestions, 2)

    suggetionsCunck.map((item) => {
      console.log(`${item[0]} => ${item[1].suggestion[0].word}`)
      searchTermCorrection = searchTermCorrection.replace(item[0], item[1].suggestion[0].word)
    })

    return searchTermCorrection
  }

  // function findWordd  (word, result) {
  //   return RegExp('\\b'+word+'\\b').test(result)
  // }
  findWord = (word: string, result: string) => {
    // return result.toLocaleLowerCase().search('/'+word.toLocaleLowerCase()+'/i') !== -1
    // let pattern = /word/i
    let p = new RegExp(`${word.toLocaleLowerCase()}`, "i");

    return result.toLocaleLowerCase().search(p) !== -1
    // return RegExp('\\b' + word.toLocaleLowerCase() + '\\b').test(result.toLocaleLowerCase())
  }


  getSpellSuggestion = (word: string) => {

    let builder: SolrQueryBuilder = new SolrQueryBuilder({
      origin: SearchConfig.solrUrl,
      lang: SearchConfig.pageLanguage,
    })

    return builder.executeSpellCheckerQuery(word)
      .then(res => res.json())
      .then(result => {
        const { suggestions } = result.spellcheck
        const suggetionsCunck = ArrayHelper.chunk(suggestions, 2)

        if (suggetionsCunck.length === 0) {
          return ''
        } else {
          return suggetionsCunck[0][1].suggestion[0].word
        }
      })

  }


  handleSpellcheck = () => {

    let promises: Promise<any>[] = []
    const docsString = JSON.stringify(this.state.searchResult.response.docs)
    const searchKeywords: string[] = this.state.searchKeyword
      .trim().split(/\s+/);
    let showDidYouMean = false

    searchKeywords.map(async (word, index) => {

      if (this.findWord(word, docsString)) {
        promises.push(Promise.resolve(word))
      } else {
        promises.push(this.getSpellSuggestion(word))
        showDidYouMean = true
      }
    })

    Promise.all(promises)
      .then((values) => {

        if (values.length === 0)
          showDidYouMean = false

        this.setState({
          didYouMean: values.filter(v => v !== ''),
          showDidYouMean: showDidYouMean
        })
      })
  }


  notificationLabel = () => {
    let inputSearchStatistics = this.getSearchKeywordStatistics();

    if (SearchConfig.pageLanguage === 'en')
      return (<div>
        <span>{this.state.searchResult.response.numFound} {SearchConfig.getLanguage("resultFound")}</span>

        {inputSearchStatistics.limitWord &&
          <span className="text-muted d-block">
            {`"${inputSearchStatistics.limitWord}" (and any subsequent words) was ignored because the search queries is limited to ${inputSearchStatistics.limitWord} words.`}
          </span>
        }

      </div>);
    else
      return (<div>
        <span>{SearchConfig.getLanguage("resultFound")} {this.state.searchResult.response.numFound}</span>

        {inputSearchStatistics.limitWord &&
          <span className="text-muted d-block">
            {`تم تجاهل "${inputSearchStatistics.limitWord}" (و الكلمات لاحقة) لأن البحث محصور في ${inputSearchStatistics.maxWordLimit} كلمة.`}
          </span>
        }
      </div>);
  }

  render() {
    const { didYouMean } = this.state

    let resultCount: number = 0;

    if (this.state.searchResult) {
      resultCount = this.state.searchResult.response.numFound as number;
    }

    let resultList = null;
    if (this.state.searchResult !== null) {
      // console.log("highlighting", this.state.searchResult.highlighting)
      resultList = this.state.searchResult.response.docs.map((result: any, index: number) => {
        return (
  


            <SearchResultItem
              key={index}
              resultItem={result}
            // highlighted={this.state.searchResult.highlighting && this.state.searchResult.highlighting[result.id]}
            />
         
        );
      });
    }


    let loader = null;
    if (this.state.isLoading) {
      loader = (
        <div className="loader-1"></div>
      );
    }

    return (
      <div className="col-lg-12 col-md-12">
        <div className="bg-white p-5 mt-5 mb-3">
          <div className="row">
            <div className="offset-md-1 justify-content-md-center">

           
            <div className="offset-md-1 col-md-10 mb-4">

              <h2 className="text-center">{SearchConfig.getLanguage("pageTitle")}</h2>
              {SearchConfig.pageLanguage === 'en'
                ? (<div>
                  <p>
                    <span>To view the Rules and Regulations in their previous archives, with searchability by class and alphabetical order, visit the Saudi Laws on the</span>
                    <a href="https://www.boe.gov.sa/en/Pages/default.aspx" target="_blank"> Bureau of Experts at the Council of Ministers' website</a>
                    <span>, as well as on the website of the </span>
                    <a href="http://ncar.gov.sa/" target="_blank">National Center for Archives and Records</a>.
                  </p>
                </div>)
                : (<div>
                  <p>
                    <span>للاطلاع على الأنظمة واللوائح بأرشيفها السابق، مع إمكانية البحث حسب التصنيفات والترتيب الأبجدي؛ تصفح مجموعة الأنظمة السعودية في موقع </span>
                    <a href="https://www.boe.gov.sa/" target="_blank">هيئة الخبراء بمجلس الوزراء</a>
                    <span> ، وكذلك </span>
                    <a href="http://ncar.gov.sa/" target="_blank">المركز الوطني للوثائق والمحفوظات</a>
                    .
                  </p>
                </div>)
              }

            </div>


            <div className="offset-md-1 col-md-10 mb-4">
              <SearchInput
                changed={this.onChangeSearchKeyword}
                search={this.doSearch}
                searchTerm={this.state.searchKeyword} />
              {this.state.searchResult && this.notificationLabel()}
            </div>
            </div>
            {/* <div className="col"></div> */}
          </div>


          {/* {this.state.didYouMean.length > 0 && this.state.showDidYouMean &&
            <DidYouMean onClickDidYouMean={this.onClickDidYouMean} didYouMean={this.state.didYouMean} />
          } */}

          <div className="row">

            {/* #Filters */}
            {(resultCount > 0 || this.state.isDirty) &&
              <div className="search-filters mb-3">{/* d-none */}

                <div className="accordion mobile-accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h3 className="filter-label mb-2">{SearchConfig.getLanguage("FilterBy")}</h3><i className="fa fa-angle-down rotate-icon"></i>
                      </button>
                      <a href="#" className="clear-filter btn no-waves" onClick={this.clearAll}>{SearchConfig.getLanguage("CLEARALL")}</a>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne">
                      <div className="card-body">
                        {/* {filters} */}


                        <React.Fragment>

                          <SearchFilter
                            searchResult={this.state.searchResult}
                            title={SearchConfig.getLanguage("Categories")}
                            facet_fields={this.state.searchResult.facet_counts.facet_fields["rulesRegulationTopic_str"]}
                            facet_Name={"rulesRegulationTopic_str"}
                            onFilterChanged={this.onFilterItemChange}
                            filterCount={this.state.params.filterQuery.filter((e: string) => e.includes("rulesRegulationTopic_str")).length}
                            enableFilter={false}
                          />

                          <SearchFilter

                            searchResult={this.state.searchResult}

                            title={SearchConfig.getLanguage("Type")}
                            facet_fields={this.state.searchResult.facet_counts.facet_fields["rulesRegulationType_str"]}
                            facet_Name={"rulesRegulationType_str"}
                            onFilterChanged={this.onFilterItemChange}
                            filterCount={this.state.params.filterQuery.filter((e: string) => e.includes("rulesRegulationType_str")).length}
                            enableFilter={false}
                          />



                        </React.Fragment>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            {/* #Filters */}

            {/* #Items */}
            {resultCount > 0
              ? (
                <div className="search-result mb-3">
                 
                    {loader}
                    {resultList}
               

                </div>)
              : (<div className="search-result mb-3">
                <h2 className="text-center">{SearchConfig.getLanguage("SorryNoResultFound")}</h2>
              </div>)
            }

            {/* #Items */}



            {/*  #Pagination */}
            {resultCount > 0 &&
               <div className="col-md-12" >   
               <Pagination totalResult={this.state.searchResult.response.numFound}
                 resultPerPage={RESULT_PER_PAGE}
                 onPageChange={this.onPaginationChange}
                 currentPage={this.state.currentPage}
               />
             </div>
            }
            {/* #Pagination */}
          </div>
        </div>
      </div>
    );
  }
}