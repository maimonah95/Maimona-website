import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Accordion from "../../components/accordion";
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import './index.scss';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'


class LinkHome extends Component {
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
                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("link")}</h3>
                </div>
               <div className='col-md-10' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
            </div>
            <p className="mt-4">{t("link-p1")}</p>
            <p className="mt-4">{t("link-p2")}</p>

            <h5 className="mt-4 text-darkBlue">{t("back-link")}</h5>
            <p className="mb-1">{t("back-link-desc1")}</p>
            <p className="">{t("back-link-desc2")}</p>

            <p className="mt-4 mb-1 font-weight-bold">{t("back-link-differentStatus")}</p>
            <ul>
                <li>{t("back-link-differentStatus1")}</li>
                <li>{t("back-link-differentStatus2")}</li>
                <li>{t("back-link-differentStatus3")}</li>
                <li>{t("back-link-differentStatus4")}</li>
            </ul>

            <h5 className="mt-4 text-darkBlue">{t("link-Accessibility-title")}</h5>
            <p className="mb-1">{t("link-Accessibility")}</p>
            
            <h5 className="mt-4 text-darkBlue">{t("link-Arabic-title")}</h5>
            <p className="">{t("link-Arabic")}</p>

            <h5 className="mt-4 text-darkBlue">{t("example")}</h5>
            <div className="row">
               <div className="col-md-2">
                    <a href="#" className="govsa-link"> {t("link")} </a>
                </div>
                <div className="col-md-3">
                    <a href="#" className="govsa-link"><i className="govsa--arrowleft"></i> {t("link")}</a>
                </div>
                <div className="col-md-3">
                    <a href="#" className="govsa-link"> {t("link")}<i className="govsa--external"></i></a>
                </div>
                <div className="col-md-2">
                    <a href="#" className="govsa-link disabled"> {t("disabled-label")} </a>
                </div>
           </div>
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
                                                        <span className="text-blue">a </span> 
                                                        <span className="text-green">href</span>
                                                        =
                                                        <span className="text-danger ">"#"</span>
                                                        <span className="text-green">class</span>
                                                        =
                                                        <span className="text-danger ">"govsa-link"</span>
                                                        &gt;
                                                    </span>
                                                    Link
                                                    <span>
                                                        &lt;/
                                                        <span className="text-blue">a</span>
                                                        &gt;
                                                    </span>
                                                    <samp className="d-block"></samp>
                                                    <span>
                                                        &lt;
                                                        <span className="text-blue">a </span> 
                                                        <span className="text-green">href</span>
                                                        =
                                                        <span className="text-danger ">"#"</span>
                                                        <span className="text-green">class</span>
                                                        =
                                                        <span className="text-danger ">"govsa-link"</span>
                                                        &gt;
                                                    </span>
                                                    <span >
                                                        &lt;
                                                        <span className="text-blue">i </span> 
                                                        <span className="text-green">class</span>
                                                        =
                                                        <span className="text-danger ">"govsa--arrowleft"</span>
                                                        &gt;
                                                    </span>
                                                    <span >
                                                        &lt;/
                                                        <span className="text-blue">i</span>
                                                        &gt;
                                                    </span>
                                                    link
                                                    <span >
                                                        &lt;/
                                                        <span className="text-blue">a</span>
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
                                    <li>{t("link-li-1")}</li>
                                    <li>{t("link-li-2")}</li>
                                    <li>{t("link-li-3")}</li>
                                </ul>
                                <h6>{t("implemntation")}</h6>
                                <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-link' </p>
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

export default withNamespaces()(LinkHome);