import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import SmallSearch from "../../components/search/small-search";
import HeaderSearch from "../../components/search/searchheader";
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import './index.scss'; 
import'../../assets/highlight/highlight.css'
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            htmlContent: '',
        }
    }
    render() {
        const { t, i18n } = this.props;
        const copyToClipboard = (event) => {
            var element = document.getElementById("htmlcode");
            var copyText = document.getElementById("cod-text").textContent;
            element.classList.remove("d-none");
            element.value=copyText;
            element.select();
            document.execCommand('copy');
            element.classList.add("d-none");
        }
        return(
    <div>
       <div className='bg-white border-radius p-4'>
            <div className='row border-bottom mb-4'>
                <div className="col-md-2">
                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("components_search")}</h3>
                </div>
                <div className='col-md-10' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
            </div>
            <p className="mt-4">{t("components_search-description-1")}</p>

            <p className="mt-4 mb-1 font-weight-bold">{t("components_search-types")}</p>
            <ul>
                <li>{t("components_search-types1")}</li>
                <li>{t("components_search-types2")}</li>
                <li>{t("components_search-types3")}</li>
            </ul>

            <p className="mt-4 mb-1 font-weight-bold">{t("components_search-elements")}</p>
            <ul>
                <li>{t("components_search-elements1")}</li>
                <li>{t("components_search-elements2")}</li>
                <li>{t("components_search-elements3")}</li>
                <li>{t("components_search-elements4")}</li>
            </ul>

            
          
          
            <p className="mt-5"><span className="text-darkBlue font-weight-bold">{t("components_search_description-2-1")} </span> {t("components_search_description-2-2")}</p>
            <p className="">{t("components_search-in-context-desc1")}</p>
            <p className="">{t("components_search-in-context-desc2")}</p>
            <p className="mt-4 mb-1 font-weight-bold">{t("components_search-in-context-differentElements")}</p>
            <ul>
                <li>{t("components_search-in-context-differentElements1")}</li>
                <li>{t("components_search-in-context-differentElements2")}</li>
                <li>{t("components_search-in-context-differentElements3")}</li>
                <li>{t("components_search-in-context-differentElements4")}</li>
                <li>{t("components_search-in-context-differentElements5")}</li>
                <li>{t("components_search-in-context-differentElements6")}</li>
            </ul>
            <p className="">{t("components_search-in-context-desc3")}</p>
            <HeaderSearch></HeaderSearch>

           
            <p className="mt-4"><span className="text-darkBlue font-weight-bold">{t("components_search_description-3-1")} </span> {t("components_search_description-3-2")}</p>
            <p className="">{t("components_search_description-4")}</p> 
            
            <p className="">{t("components_search-small-desc1")}</p>
            <p className="">{t("components_search-small-desc2")}</p>
            <p className="">{t("components_search-small-desc3")}</p>
            <p className="mt-4 mb-1 font-weight-bold">{t("components_search-small-differentElements")}</p>
            <ul>
                <li>{t("components_search-small-differentElements1")}</li>
                <li>{t("components_search-small-differentElements2")}</li>
                <li>{t("components_search-small-differentElements3")}</li>
                <li>{t("components_search-small-differentElements4")}</li>
                <li>{t("components_search-small-differentElements5")}</li>
            </ul>
            <SmallSearch  className="col-md-3"></SmallSearch>

            <p className="mt-5"><span className="text-darkBlue font-weight-bold">{t("components_search_description-5-1")} </span> {t("components_search_description-5-2")}</p>
            <p className="mt-4">{t("components_search_description-6")}</p>
            <p>{t("components_search-Global-differentElements1")}</p>
            <p>{t("components_search-Global-differentElements2")}</p>
            <SmallSearch className="col-md-8"></SmallSearch>

            <h5 className="mt-5 text-darkBlue">{t("components_search-Arabic-title")}</h5>
            <p className="mb-0">{t("components_search-Arabic")}</p>
            <p className="">{t("components_search-Arabic2")}</p>
        </div>
        <div className='bg-white px-4 mt-1'>
            <div className="col-md-12 mt-4 mb-3 px-0">
                <div className="accordion govsa-accordion-website" id="accordionExample">
                    <div className="card">
                        <button className="collapsed card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                        <img src={CodeIcon} width="40" alt="" />
                        HTML<i className=" govsa-icon govsa--arrowdown"></i>
                        </button>
                        <div id="collapseOne1" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                                <div className="row  bg-gray-pastel mb-3">
                                <textarea id="htmlcode" className="d-none"/>
                                    <div className="col-md-12 mb-2" onClick={(event) => copyToClipboard(event)}>
                                        <div className="row">
                                            <div className="col-md-12 mb-2">
                                                <Button className="btn govsa-btn--darkBlue mt-3 f-r"  text={t("copy")}></Button>
                                            </div>
                                        </div>  
                                        <div dir="ltr" className="col-md-12 mb-2 px-3">
                                            <pre id="cod-text">   
                                                <code class="html hljs xml">
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row my-3"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"col-md-3"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group mb-3 govsa-search--small"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-input govsa-search__input"</span>
                                                    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"search"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group-append"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-clear__button d-none"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
                                                    <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--closed"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group-append"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__button"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
                                                    <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--zoom"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__results d-none"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__container"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Request for Student Clearance<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Request for Student Clearance<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Request for Student Clearance<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Request for Student Clearance<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span className='text-gray'>//header search</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"col-md-7"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group mb-3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-input govsa-search__input"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"search"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group-append"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-clear__button d-none"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
                                                    <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--closed"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group-append"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__button"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
                                                    <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--zoom"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__results d-none"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__container"</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result my-2 font-weight-bold"</span>&gt;</span>RELATED SEARCHES:<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Request for Student Clearance<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Al Jouf University<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Request for Student Clearance<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Al Jouf University<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Request for Student Clearance<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Al Jouf University<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-search__result"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Request for Student Clearance<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Al Jouf University<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-advanced-search"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-link"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>&gt;</span> Advanced Search<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white px-4 mt-1'>
        <div className="col-md-12 mt-4 mb-3 px-0">
            <div className="accordion govsa-accordion-website" id="accordionExample2">
                <div className="card">
                    <button className="collapsed card-header" id="headingOne2" data-toggle="collapse" data-target="#collapseOne2" aria-expanded="false" aria-controls="collapseOne2">
                    <img src={UsageIcon} width="40" alt="" />
                    {t("usage")}  <i className=" govsa-icon govsa--arrowdown"></i>
                    </button>
                    <div id="collapseOne2" className="collapse" aria-labelledby="headingOne2" data-parent="#accordionExample2">
                    <div className="card-body pb-3">
                                <h6>{t("implemntation")}</h6>
                                <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-serach' and 'govsa-ds/js/search' </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
   </div>
           )
        }
    }

export default withNamespaces()(Search);