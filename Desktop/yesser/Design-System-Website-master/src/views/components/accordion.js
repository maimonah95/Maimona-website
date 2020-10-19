import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Accordions from "../../components/accordion";
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import './index.scss';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class AccordionHome extends Component {
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
                <div className="col-md-3">
                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("accordion")}</h3>
                </div>
                <div className='col-md-9' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
            </div>
            <p className="mt-4">{t("accordion-p1")}</p>
            <p className="mt-4">{t("accordion-p2")}</p>

            <h5 className="mt-4 text-darkBlue">{t("accordion-Accessibility-title")}</h5>
            <p className="">{t("accordion-Accessibility")}</p>

            <p className="mt-4">{t("accordion-desc1")}</p>

            <p className="mt-4 mb-1 font-weight-bold">{t("accordion-differentElements")}</p>
                    <ul>
                        <li>{t("accordion-differentElements1")}</li>
                        <li>{t("accordion-differentElements2")}</li>
                        <li>{t("accordion-differentElements3")}</li>
                        <li>{t("accordion-differentElements4")}</li>
                    </ul>

                    
                    <h5 className="mt-4 text-darkBlue">{t("accordion-Arabic-title")}</h5>
                    <p className="mb-1">{t("accordion-Arabic")}</p>
                    <p className="mb-1 mb-5">{t("accordion-Arabic-desc")}</p>


            <Accordions></Accordions>
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
                                        <pre data-module="" id="cod-text">
                                                <code>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">div </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"accordion govsa-accordion"</span>
                                                        <span class="text-green">id</span>
                                                        =
                                                        <span class="text-danger ">"accordionExample"</span>
                                                        &gt;
                                                    </span>
                                                
                                                    <span className="d-block">
                                                    &nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">div </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"card"</span>
                                                        &gt;
                                                    </span>
                                    
                                                    <span className="d-block">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">button </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"card-header"</span>
                                                        <span class="text-green">id</span>
                                                        =
                                                        <span class="text-danger ">"headingOne"</span>
                                                    </span>
                                                    <span  className="d-block">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span class="text-green">data-toggle</span>
                                                        =
                                                        <span class="text-danger ">"collapse"</span>
                                                        <span class="text-green">data-target</span>
                                                        =
                                                        <span class="text-danger ">"#collapseOne"</span>
                                                        <span class="text-green">aria-expanded</span>
                                                        =
                                                        <span class="text-danger ">"true"</span>
                                                        <span class="text-green">aria-controls</span>
                                                        =
                                                        <span class="text-danger ">"collapseOne"</span>
                                                        &gt;
                                                    </span>
                                                
                                                    <span className="d-block">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    Lable 
                                                    </span>
                                                    <span >
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">i  </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"govsa-icon govsa--Color"</span>
                                                        &gt;
                                                    </span>
                                                    <span >
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">i</span>
                                                        &gt;
                                                    </span>
                                                    <span className="d-block" >
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">button</span>
                                                        &gt;
                                                    </span>


                                                    <span className="d-block">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">div </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"collapse show"</span>
                                                        <span class="text-green">id</span>
                                                        =
                                                        <span class="text-danger ">"collapseOne"</span>
                                                    </span>
                                                    <span  className="d-block">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span class="text-green">aria-labelledby</span>
                                                        =
                                                        <span class="text-danger ">"headingOne"</span>
                                                        <span class="text-green">data-target</span>
                                                        =
                                                        <span class="text-danger ">"#collapseOne"</span>
                                                        <span class="text-green">data-parent</span>
                                                        =
                                                        <span class="text-danger ">"#accordionExample"</span>
                                                        &gt;
                                                    </span>

                                                    <span className="d-block">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">div </span> 
                                                        <span class="text-green">class</span>
                                                        =
                                                        <span class="text-danger ">"card-body"</span>
                                                        &gt;
                                                    </span>
                                                    <span className="d-block">
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson adsquid.
                                                    </span>
                                                    <span className="d-block" >
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">div</span>
                                                        &gt;
                                                    </span>
                                                    <span className="d-block" >
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">div</span>
                                                        &gt;
                                                    </span>
                                                    <span className="d-block" >
                                                        &nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">div</span>
                                                        &gt;
                                                    </span>
                                                    <span className="d-block" >
                                                        &lt;/
                                                        <span class="text-blue">div</span>
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
                                <li>{t("accordion-li-1")}</li>
                                <li>{t("accordion-li-2")}</li>
                                <li>{t("accordion-li-3")}</li>
                                <li className="mb-3">{t("accordion-li-4")}</li>
                            </ul>
                            <h6>{t("implemntation")}</h6>
                            <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-accordion' </p>
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
export default withNamespaces()(AccordionHome);