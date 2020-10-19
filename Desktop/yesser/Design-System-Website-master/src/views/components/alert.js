import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Alert from "../../components/alert";
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class AlertHome extends Component {
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
                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("alert")}</h3>
                </div>
                <div className='col-md-10' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
            </div>
            <p className="mt-4">{t("alert-p1")}</p>
            <p className="mt-4">{t("alert-p2")}</p>

            <p className="mt-4 mb-0 font-weight-bold">{t("alert-p3")}</p>

            <ul>
                <li>{t("alert-li-1")}</li>
                <li>{t("alert-li-2")}</li>
                <li>{t("alert-li-3")}</li>
                <li>{t("alert-li-4")}</li>
            </ul>

            <p className="mt-4 mb-1 font-weight-bold">{t("alert-differentElements")}</p>
            <ul>
                <li>{t("alert-differentElements1")}</li>
                <li>{t("alert-differentElements2")}</li>
                <li>{t("alert-differentElements3")}</li>
                <li>{t("alert-differentElements4")}</li>
            </ul>

            <p className="mt-4">{t("alert-desc")}</p>

            <h5 className="mt-4 text-darkBlue">{t("alert-Arabic-title")}</h5>
            <p className="mb-1">{t("alert-Arabic")}</p>
            <p className="mb-1 font-weight-bold">{t("alert-states")}</p>
            <ul className="mb-4">
                <li>{t("alert-states1")}</li>
                <li>{t("alert-states2")}</li>
                <li>{t("alert-states3")}</li>
                <li>{t("alert-states4")}</li>
            </ul>
            <Alert></Alert>


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
                                            <span className="d-block mb-2 text-black-50">//Warning Alert</span>
                                                <span className="d-block">
                                                    &lt;
                                                    <span class="text-blue">div </span> 
                                                    <span class="text-green">class</span>
                                                    =
                                                    <span class="text-danger ">"alert govsa-alert--warning"</span>
                                                    <span class="text-green">role</span>
                                                    =
                                                    <span class="text-danger ">"alert"</span>
                                                    &gt;
                                                </span>
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">h6 </span> 
                                                        &gt;
                                                    </span>
                                                        <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                            &lt;
                                                            <span class="text-blue">img </span> 
                                                            <span class="text-green">class</span>
                                                            =
                                                            <span class="text-danger ">"mb-2"</span>
                                                            <span class="text-green">src</span>
                                                            =
                                                            <span class="text-danger ">"/static/images/warning.svg"</span>
                                                            &gt;
                                                        </span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Warning Alert
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">h6</span>
                                                        &gt;
                                                    </span>

                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">p </span> 
                                                        &gt;
                                                    </span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">p</span>
                                                        &gt;
                                                    </span>
                                                <span className="d-block">
                                                    &lt;/
                                                    <span class="text-blue">div</span>
                                                    &gt;
                                                </span>
                                                <span className="d-block my-2 text-black-50">//Success Alert</span>
                                                <span className="d-block">
                                                    &lt;
                                                    <span class="text-blue">div </span> 
                                                    <span class="text-green">class</span>
                                                    =
                                                    <span class="text-danger ">"alert govsa-alert--success"</span>
                                                    <span class="text-green">role</span>
                                                    =
                                                    <span class="text-danger ">"alert"</span>
                                                    &gt;
                                                </span>
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">h6 </span> 
                                                        &gt;
                                                    </span>
                                                        <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                            &lt;
                                                            <span class="text-blue">img </span> 
                                                            <span class="text-green">class</span>
                                                            =
                                                            <span class="text-danger ">"mb-2"</span>
                                                            <span class="text-green">src</span>
                                                            =
                                                            <span class="text-danger ">"/static/images/success.svg"</span>
                                                            &gt;
                                                        </span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Success Alert
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">h6</span>
                                                        &gt;
                                                    </span>

                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">p </span> 
                                                        &gt;
                                                    </span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">p</span>
                                                        &gt;
                                                    </span>
                                                <span className="d-block">
                                                    &lt;/
                                                    <span class="text-blue">div</span>
                                                    &gt;
                                                </span>
                                                <span className="d-block my-2 text-black-50">//Info Alert</span>
                                                <span className="d-block">
                                                    &lt;
                                                    <span class="text-blue">div </span> 
                                                    <span class="text-green">class</span>
                                                    =
                                                    <span class="text-danger ">"alert govsa-alert--info"</span>
                                                    <span class="text-green">role</span>
                                                    =
                                                    <span class="text-danger ">"alert"</span>
                                                    &gt;
                                                </span>
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">h6 </span> 
                                                        &gt;
                                                    </span>
                                                        <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                            &lt;
                                                            <span class="text-blue">img </span> 
                                                            <span class="text-green">class</span>
                                                            =
                                                            <span class="text-danger ">"mb-2"</span>
                                                            <span class="text-green">src</span>
                                                            =
                                                            <span class="text-danger ">"/static/images/info.svg"</span>
                                                            &gt;
                                                        </span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Info Alert
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">h6</span>
                                                        &gt;
                                                    </span>

                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">p </span> 
                                                        &gt;
                                                    </span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">p</span>
                                                        &gt;
                                                    </span>
                                                <span className="d-block">
                                                    &lt;/
                                                    <span class="text-blue">div</span>
                                                    &gt;
                                                </span>
                                                <span className="d-block my-2 text-black-50">//Danger Alert</span>
                                                <span className="d-block">
                                                    &lt;
                                                    <span class="text-blue">div </span> 
                                                    <span class="text-green">class</span>
                                                    =
                                                    <span class="text-danger ">"alert govsa-alert--danger"</span>
                                                    <span class="text-green">role</span>
                                                    =
                                                    <span class="text-danger ">"alert"</span>
                                                    &gt;
                                                </span>
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">h6 </span> 
                                                        &gt;
                                                    </span>
                                                        <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                            &lt;
                                                            <span class="text-blue">img </span> 
                                                            <span class="text-green">class</span>
                                                            =
                                                            <span class="text-danger ">"mb-2"</span>
                                                            <span class="text-green">src</span>
                                                            =
                                                            <span class="text-danger ">"/static/images/danger.svg"</span>
                                                            &gt;
                                                        </span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Danger Alert
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">h6</span>
                                                        &gt;
                                                    </span>

                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">p </span> 
                                                        &gt;
                                                    </span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    <span className="d-block">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;/
                                                        <span class="text-blue">p</span>
                                                        &gt;
                                                    </span>
                                                <span className="d-block">
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
                            <p className="">{t("alert-accessbility-guidlins")} </p>
                            <h6>{t("example")}</h6>
                            <p className="">{t("alert-example")}</p>
                            <h6>{t("implemntation")}</h6>
                            <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-alert' </p>
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

export default withNamespaces()(AlertHome);