
import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Button from '../../components/buttons/index'
import ColseTag from '../../assets/images/closeTag.svg';
import SmallSearch from "../../components/search/small-search";
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Patterns extends Component {
    constructor(props){
        super(props);
        this.state = {
            htmlContent: '',
        }
    }
    colseTags(){
        var buttons = document.getElementsByClassName("colsed-tag");
        buttons[0].parentNode.remove();
     }
    render() {
        const { t, i18n } = this.props;
        const copyToClipboard = (event) => {
            var element = document.getElementById("htmlcode");
            element.classList.remove("d-none");
            element.value=event.target.textContent;
            element.select();
            document.execCommand('copy');
            element.classList.add("d-none");
        }
        
        return(
                <div className='bg-white border-radius p-4'>
                    <div className='row border-bottom'>
                        <div className="col-md-3">
                            <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("patterns")}</h3>
                        </div>
                        <div className='col-md-9' dir="ltr">
                            <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                            <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                        </div>
                    </div>

                    <p className="mt-4">{t("pattrens_pattrens_description-1")}</p>
                    <p className="mt-4">{t("pattrens_pattrens_description-2")}</p>
                    <p className="mt-4">{t("pattrens_pattrens_description-3")}</p>
                    <div className="row">
                        <div className="col-md-3 mb-3 mb-md-0">
                            <input className="govsa-input" type="text" placeholder= {t("accordion-lable")} disabled />
                        </div>
                        <div className="col-md-3">
                        <label className="govsa-checkbox" style={{cursor: 'default'}}>
                        {t("accordion-lable")}
                        <input type="checkbox" disabled/>
                            <span className="govsa-checkbox__checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <p className="mt-4">{t("pattrens_pattrens_description-4")}</p>
                    <div className="row">
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="dropdown govsa-dropdown"> 
                                <button className="dropdown-toggle bg-darkBlue-tint text-white" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {t("accordion-lable")}
                                <i className="govsa-icon govsa--arrowdown"></i>
                                </button>
                                <div className="dropdown-menu" x-placement="bottom-start">
                                    <a className="govsa-dropdown__item" href="#" title="item 1"> {t("accordion-body")}</a>
                                    <a className="govsa-dropdown__item" href="#" title="item 2"> {t("accordion-body")}</a>
                                    <a className="govsa-dropdown__item" href="#" title="item 3"> {t("accordion-body")}</a>
                                </div>
                            </div>
                        </div>

                        <div className="mx-3 mx-md-5 mb-3 mb-md-0">
                        <button type="button" className="btn govsa-btn--darkBlue-tint">{t("button-lable")}</button>
                        </div>

                        <div className="col-md-4">
                            <ul className="nav nav-tabs govsa-tabs p-0">
                                <li className="nav-item govsa-tab--active bg-darkBlue-tint" style={{borderColor: '#444061'}}>
                                    <a className="nav-link text-white  bg-darkBlue-tint"  href="#"> {t("accordion-lable")}</a>
                                    <div className="govsa-tabs--border bg-white"></div>
                                </li>                                      
                            </ul>
                        </div>
                    </div>
                    <p className="mt-4">{t("pattrens_pattrens_description-5")}</p>
                    <div className="row">
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="dropdown govsa-dropdown">
                                <button className="dropdown-toggle bg-darkBlue-tint text-white" style={{boxShadow: '0px 0 0 2px #FFC107'}} type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {t("accordion-lable")}
                                <i className="govsa-icon govsa--arrowdown"></i>
                                </button>
                                <div className="dropdown-menu" x-placement="bottom-start">
                                    <a className="govsa-dropdown__item" href="#" title="item 1"> {t("accordion-body")}</a>
                                    <a className="govsa-dropdown__item" href="#" title="item 2"> {t("accordion-body")}</a>
                                    <a className="govsa-dropdown__item" href="#" title="item 3"> {t("accordion-body")}</a>
                                </div>
                            </div>
                        </div>

                        <div className="mx-3 mx-md-5 mb-3 mb-md-0">
                        <button type="button" className="btn govsa-btn--darkBlue-tint" style={{boxShadow: '0px 0 0 2px #FFC107'}}>{t("button-lable")}</button>
                        </div>

                        <div className="col-md-4">
                            <ul className="nav nav-tabs govsa-tabs p-0">
                                <li className="nav-item govsa-tab--active bg-darkBlue-tint" style={{borderColor: '#444061', boxShadow: '0px 0 0 2px #FFC107'}}>
                                    <a className="nav-link text-white  bg-darkBlue-tint"  href="#"> {t("accordion-lable")}</a>
                                    <div className="govsa-tabs--border bg-white"></div>
                                </li>                                      
                            </ul>
                        </div>
                    </div>
                    <p className="mt-4">{t("pattrens_pattrens_description-6")}</p>
                    <div className='row'>
                        <SmallSearch  className="col-md-12"></SmallSearch>
                        <div className="col-md-3 mx-md-5 mx-0 mt-1">
                            <span className="govsa-tag">{t("components_tag")}   
                                <button className="go1vsa-clear__button colsed-tag" onClick={this.colseTags} style={{background: 'none',border: 'none'}}>
                                    <img src={ColseTag}/>
                                </button>
                            </span>
                        </div>
                    </div>
                    <p className="mt-4"><span className="font-weight-bold">{t("pattrens_pattrens_description-7")}</span>{t("pattrens_pattrens_description-8")}</p>
                    <div className="col-3 px-0">
                        <input className="govsa-input govsa-border--red" type="text" placeholder={t("accordion-lable")}/>
                        <span className="govsa-errorMessage pt-1">{t("ErrorMessage")}</span>
                    </div>
                </div>
                )
            }
        }
    
export default withNamespaces()(Patterns);