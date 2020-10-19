import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import SideNavigation from '../../components/side-navigation/sidenavigation';
import './index.scss';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class SideNavigationHome extends Component {
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
                        <div className="col-md-4">
                            <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("components_sideNavigation")}</h3>
                        </div>
                        <div className='col-md-8' dir="ltr">
                            <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                            <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                        </div>
                    </div>
                    <p className="mt-4">{t("components_sideNavigation_description-1")}</p>
                    <p className="mt-4">{t("components_sideNavigation_description-2")}</p>
                    <p className="mt-4">{t("components_sideNavigation_description-3")}</p>
                                      
                    <p className="mt-4 mb-1 font-weight-bold">{t("components_sideNavigation-differentElements")}</p>
                    <ul>
                        <li>{t("components_sideNavigation-differentElements1")}</li>
                        <li>{t("components_sideNavigation-differentElements2")}</li>
                    </ul>

                    <p className="mt-4 mb-1 font-weight-bold">{t("components_sideNavigation-differentStatus")}</p>
                    <ul>
                        <li>{t("components_sideNavigation-differentStatus1")}</li>
                        <li>{t("components_sideNavigation-differentStatus2")}</li>
                        <li>{t("components_sideNavigation-differentStatus3")}</li>
                        <li>{t("components_sideNavigation-differentStatus4")}</li>
                    </ul>

                    <p className="mt-3">{t("components_sideNavigation-differentStatus-desc")}</p>
                    
                    <h5 className="mt-4 text-darkBlue">{t("components_sideNavigation-arabic-title")}</h5>
                    <p className="mb-1">{t("components_sideNavigation-arabic")}</p>
                    <p className="mb-1 mb-5">{t("components_sideNavigation-arabic2")}</p>

                    <SideNavigation></SideNavigation>
                </div>
                <div className='bg-white px-4 mt-1'>
                    <div className="col-md-12 mt-4 mb-3 px-0">
                        <div className="accordion govsa-accordion-website" id="accordionExample">
                            <div className="card">
                                <button className="collapsed card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                                <img src={CodeIcon} width="40" alt="" />
                                HTML <i className=" govsa-icon govsa--arrowdown"></i>
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
                                                        <code>
                                                            <span >
                                                                &lt;
                                                                <span class="text-blue">ul </span> 
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"nav flex-column govsa-sideNavigation"</span>
                                                                &gt;
                                                            </span>
                                                            <br/> 
                                                            <span >
                                                                &lt;
                                                                <span class="text-blue">li </span> 
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"nav-item govsa-active"</span>
                                                                &gt;
                                                            </span>
                                                            <br/>  
                                                            <span >
                                                                &lt;
                                                                <span class="text-blue">a </span> 
                                                                <span class="text-green">href</span>
                                                                =
                                                                <span class="text-danger ">"#"</span>
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"nav-link"</span>
                                                                &gt;
                                                            </span>
                                                            Activ
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">a</span>
                                                                &gt;
                                                            </span>
                                                            <br/> 
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">li</span>
                                                                &gt;
                                                            </span>
                                                            <br/> 
                                                            <span >      
                                                                &lt;
                                                                <span class="text-blue">li </span> 
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"govsa-sideNavigation__dropdown nav-item"</span>
                                                                &gt;
                                                            </span>     
                                                            <br/>  
                                                            <span >
                                                                &lt;
                                                                <span class="text-blue">button </span> 
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"govsa-sideNavigation__button"</span>
                                                                &gt;
                                                            </span>
                                                            Dropdown 
                                                            <br/> 
                                                            <span >
                                                                &lt;
                                                                <span class="text-blue">i </span> 
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"govsa--right"</span>
                                                                &gt;
                                                            </span>
                                                        
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">i</span>
                                                                &gt;
                                                            </span>
                                                            <br/>  
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">button</span>
                                                                &gt;
                                                            </span>
                                                            <br/> 
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">li</span>
                                                                &gt;
                                                            </span>
                                                            <br/> 
                                                            <span >
                                                                &lt;
                                                                <span class="text-blue">div </span> 
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"govsa-dropdown-container flex-column"</span>
                                                                &gt;
                                                            </span>
                                                                <br/> 
                                                                <span >
                                                                &lt;
                                                                <span class="text-blue">li </span> 
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"nav-item"</span>
                                                                &gt;
                                                            </span>

                                                            <br/>  
                                                            <span >
                                                                &lt;
                                                                <span class="text-blue">a </span> 
                                                                <span class="text-green">href</span>
                                                                =
                                                                <span class="text-danger ">"#"</span>
                                                                <span class="text-green">class</span>
                                                                =
                                                                <span class="text-danger ">"nav-link"</span>
                                                                &gt;
                                                            </span>
                                                            item
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">a</span>
                                                                &gt;
                                                            </span>
                                                            <br/> 
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">li</span>
                                                                &gt;
                                                            </span>
                                                            <br/> 
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">div</span>
                                                                &gt;
                                                            </span>
                                                            <br/> 
                                                            <span>
                                                                &lt;/
                                                                <span class="text-blue">ul</span>
                                                                &gt;
                                                            </span>
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
                                        <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-side-navigation' and 'govsa-ds/js/side-navigation' </p>
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
export default withNamespaces()(SideNavigationHome);