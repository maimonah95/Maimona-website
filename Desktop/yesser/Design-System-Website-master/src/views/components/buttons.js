import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Buttons from "../../components/button";
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import './index.scss';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class ButtonHome extends Component {
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
                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("button")}</h3>
                </div>
                <div className='col-md-10' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
                </div>
            <p className="mt-4">{t("button-p1")}</p>
            <p className="mt-4">{t("button-p2")}</p>

            <p className="mt-4 mb-1 font-weight-bold">{t("button-differentstatus")}</p>
            <ul>
                <li>{t("button-differentstatus1")}</li>
                <li>{t("button-differentstatus2")}</li>
                <li>{t("button-differentstatus3")}</li>
                <li>{t("button-differentstatus4")}</li>
            </ul>

            <h5 className="mt-4 text-darkBlue">{t("button-PrimaryButton")}</h5>
            <p className="">{t("button-PrimaryButton1")}</p>
            <p className="">{t("button-PrimaryButton2")}</p>
            <p className="">{t("button-PrimaryButton3")}</p>

            <h5 className="mt-4 text-darkBlue">{t("button-ArabicVersion")}</h5>
            <p className="">{t("button-ArabicVersion1")}</p>
            <p className="mb-5">{t("button-ArabicVersion2")}</p>

            <Buttons></Buttons>
            
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
                                            <div className="col-md-12  mb-2">
                                                <Button className="btn govsa-btn--darkBlue mt-3 f-r"  text={t("copy")}></Button>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-2 px-3">
                                            <pre dir="ltr" id="cod-text" data-module="">
                                                <code>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">button </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"btn govsa-btn--darkBlue"</span>
                                                        &gt;
                                                    </span>
                                                    Action
                                                    <span >
                                                        &lt;/
                                                        <span class="text-blue">button</span>
                                                        &gt;
                                                    </span>
                                                </code>
                                           
                                                <samp className="d-block"></samp>
                                            
                                                <code>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">button </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"btn govsa-btn--darkBlue"</span>
                                                        <span class="text-gray-tint">disabled</span>
                                                        &gt;
                                                    </span>
                                                    Action
                                                    <span >
                                                        &lt;/
                                                        <span class="text-blue">button</span>
                                                        &gt;
                                                    </span>
                                                </code>
                                           
                                                <samp className="d-block"></samp>
                                            
                                                <code>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">button </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"btn govsa-btn--outline--darkBlue"</span>
                                                        &gt;
                                                    </span>
                                                    Action
                                                    <span >
                                                        &lt;/
                                                        <span class="text-blue">button</span>
                                                        &gt;
                                                    </span>
                                                </code>
                                                
                                                <samp className="d-block"></samp>

                                            
                                                <code>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">button </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"btn govsa-btn--outline--darkBlue"</span>
                                                        <span class="text-gray-tint">disabled</span>
                                                        &gt;
                                                    </span>
                                                    Action
                                                    <span >
                                                        &lt;/
                                                        <span class="text-blue">button</span>
                                                        &gt;
                                                    </span>
                                                </code>
                                           
                                                <samp className="d-block"></samp>
                                            
                                                <code>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">button </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"btn govsa-btn--green"</span>
                                                        &gt;
                                                    </span>
                                                    Action
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">i  </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"govsa--external"</span>
                                                        &gt;
                                                    </span>
                                                    <span >
                                                        &lt;/
                                                        <span class="text-blue">i</span>
                                                        &gt;
                                                    </span>
                                                    <span >
                                                        &lt;/
                                                        <span class="text-blue">button</span>
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
                            <h6>{t("accessbility-guidlins")}</h6>
                            <ul>
                                <li>{t("button-li-1")}</li>
                                <li>{t("button-li-2")}</li>
                                <li>{t("button-li-3")}</li>
                            </ul>
                            <h6>{t("implemntation")}</h6>
                            <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-button' </p>
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

export default withNamespaces()(ButtonHome);