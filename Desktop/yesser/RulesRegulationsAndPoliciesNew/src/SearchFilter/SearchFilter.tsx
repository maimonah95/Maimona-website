import React from 'react';
import SearchConfig from '../Helpers/Config';


interface SearchFilterInputProps {
    title: String | string[],
    searchResult: any,
    //params:any,
    facet_Name:string,
    facet_fields: string[],
    onFilterChanged:any,
    filterCount: number,
    enableFilter:boolean
}

interface SearchFilterInputState{
    filterKeyword:string
}

export default class SearchFilter extends React.Component<SearchFilterInputProps,SearchFilterInputState> {
    readonly state: Readonly<SearchFilterInputState> = {
        filterKeyword:""
    };

    
chunk = (array:any[], size:number) => {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
}
  
  preventXSS = (k:string) => {
    if (k)
        return k.replace(/[^a-z \u0621-\u064A 0-9.,?&quot]/gi , '');
    return k;
}

onFilterKeyUp = (event :any) => {
    // console.log(event.target.value)
    // console.log(`${this.props.facet_Name}:${event.target.value}`);
    
    let AllFilterItems = document.querySelectorAll(`input[value*="${this.props.facet_Name}:"]`);
    this.setState({filterKeyword:event.target.value}, () => {
    if (this.state.filterKeyword.trim() === "") {
        //show
        AllFilterItems.forEach((element) => {
            (element.parentElement as HTMLElement).classList.remove('d-none');
         });
    } else {
        //hide all then show
        AllFilterItems.forEach((element) => {
            (element.parentElement as HTMLElement).classList.add('d-none');
         });

            //TODO: Fix | optimize data structure | Sorry but its work :p
            let filterItems = document.querySelectorAll(`input[value*='${this.props.facet_Name}:"${this.state.filterKeyword}']`);
            
            filterItems.forEach((element) => {
                (element.parentElement as HTMLElement).classList.remove('d-none');
             });
            }
        });
    }
onChangeInputFilter  = (event : any) => {
    this.setState({filterKeyword : event.target.value})
}
componentDidMount(){
}
    render() {
        let searchFilterList = this.chunk(this.props.facet_fields,2)
            //.filter((e:any) => e[0].includes(this.state.filterKeyword))
            .map((filterKeyValue:any,index:number) => {
                return (
                    <FilterItem
                    key = {index}
                    Id = {index}
                    filterItemName = {filterKeyValue[0]}
                    facet_Name = {this.props.facet_Name}
                    onFilterChanged = {this.props.onFilterChanged}
                    isSelected = {false}
                    //ItemCount = {filterKeyValue[1]}
                    />
                    );
                }); 
           
                
        return (
            <div className="accordion filter-accordion" role="tablist"
                aria-multiselectable="true">
                    <input type="checkbox" name="vehicle1" value="Bike" />
                <div className="card">
                    <div className="card-header" role="tab" id="headingOne1">
                        <a className="collapsed" data-toggle="collapse"
                            data-parent="" href={"#"+this.props.facet_Name}
                            aria-expanded="false" aria-controls={"#"+this.props.facet_Name}>
                            <h3 className="title-collapsible">
                                {this.props.title}
                                <i className="fa fa-angle-down rotate-icon"></i>
                                <div className="br-section-text">
                                    <small className="number">{this.props.filterCount}</small>
                                    <small> {SearchConfig.getLanguage("selected")}</small>
                                </div>
                            </h3>
                        </a>
                    </div>
                    <div id={this.props.facet_Name} className="collapse" role="tabpanel"
                        aria-labelledby="headingOne1" data-parent="">
                        <div className="card-body">
                            {this.props.enableFilter &&
                                <div className="filter-searchbox">
                                    <input className="form-control"
                                        onKeyUp={this.onFilterKeyUp}
                                        onChange = {this.onChangeInputFilter}
                                        placeholder={SearchConfig.getLanguage("filter")}
                                        value = {this.preventXSS(this.state.filterKeyword)} />
                                </div>
                            }
                            <div className="filter-checkboxes">
                                {searchFilterList}
                            </div>
                            {this.props.facet_fields.length === 0 ?
                            <div className="no-filters">
                                <p className="text-center">No Filter Found</p>
                            </div> : null }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

interface SearchFilterItemInputProps {
    Id: any,
    facet_Name : string
    filterItemName: String,
    //ItemCount:number,
    onFilterChanged: any,
    isSelected:boolean
}

class FilterItem extends React.Component<SearchFilterItemInputProps> {
    render() {
        return (
            <div className="custom-control custom-checkbox">           
                <input type="checkbox"
                    //checked = {this.props.isSelected}
                    className="custom-control-input" id={this.props.Id + this.props.filterItemName}
                    name="grp1" onChange={this.props.onFilterChanged} value={`${this.props.facet_Name}:"${this.props.filterItemName}"`}
                     /> 
                <label className="custom-control-label"  htmlFor={this.props.Id + this.props.filterItemName}>{this.props.filterItemName}</label>
            </div>
        );
    }
}