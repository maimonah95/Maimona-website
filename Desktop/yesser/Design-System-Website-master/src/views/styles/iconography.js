
import React, { Component } from 'react';
import './index.scss';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import Button from '../../components/buttons/index';
import { withNamespaces } from 'react-i18next';
import CodeIcon from '../../assets/images/code-icon.svg';
import Link from '../../components/link/index';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Iconography extends Component {
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
            [
                <div className='bg-white border-radius p-4'>
                    <div className='row border-bottom'>
                        <div className="col-md-2">
                            <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("iconography")}</h3>
                        </div>
                        <div className='col-md-10' dir="ltr">
                            <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                            <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                        </div>
                    </div>
                    <p class="mt-4">{t("styles_iconography_desc1")}</p>
                    <p class="mt-4">{t("styles_iconography_desc2")}</p>
                    <div class="row my-3"> 
                        <i class="p-3 font24 govsa--edit"></i>
                        <i class="p-3 font24 govsa--delete"></i>
                        <i class="p-3 font24 govsa--download"></i>
                        <i class="p-3 font24 govsa--contact"></i>
                        <i class="p-3 font24 govsa--options"></i>
                        <i class="p-3 font24 govsa--favourite"></i>
                        <i class="p-3 font24 govsa--star"></i>
                        <i class="p-3 font24 govsa--user"></i>
                        <i class="p-3 font24 govsa--info"></i>
                        <i class="p-3 font24 govsa--zoom"></i>
                        <i class="p-3 font24 govsa--alert"></i>
                        <i class="p-3 font24 govsa--setting"></i>
                        <i class="p-3 font24 govsa--mail"></i>
                        <i class="p-3 font24 govsa--lock"></i>
                        <i class="p-3 font24 govsa--external"></i>
                        <i class="p-3 font24 govsa--image"></i>
                        <i class="p-3 font24 govsa--eye"></i>
                        <i class="p-3 font24 govsa--home"></i>
                        <i class="p-3 font24 govsa--notification"></i>
                        <i class="p-3 font24 govsa--renew"></i>
                        <i class="p-3 font24 govsa--chat"></i>
                        <i class="p-3 font24 govsa--close"></i>
                        <i class="p-3 font24 govsa--closed"></i>
                        <i class="p-3 font24 govsa--export"></i>
                        <i class="p-3 font24 govsa--right"></i>
                        <i class="p-3 font24 govsa--left"></i>
                        <i class="p-3 font24 govsa--upload"></i>
                        <i class="p-3 font24 govsa--menu"></i>
                        <i class="p-3 font24 govsa--Color"></i>
                        <i class="p-3 font24 govsa--arrowleft"></i>
                        <i class="p-3 font24 govsa--arrowright"></i>
                        <i class="p-3 font24 govsa--arrowdown"></i>
                        <i class="p-3 font24 govsa--arrowup"></i>
                    </div>
                <p class="mt-4">{t("styles_iconography_desc3")}</p>
                <div class="row my-3"> 
                    <i class="p-3 govsa--edit"></i>
                    <i class="p-3 govsa--delete"></i>
                    <i class="p-3 govsa--download"></i>
                    <i class="p-3 govsa--contact"></i>
                    <i class="p-3 govsa--options"></i>
                    <i class="p-3 govsa--favourite"></i>
                    <i class="p-3 govsa--star"></i>
                    <i class="p-3 govsa--user"></i>
                    <i class="p-3 govsa--info"></i>
                    <i class="p-3 govsa--zoom"></i>
                    <i class="p-3 govsa--alert"></i>
                    <i class="p-3 govsa--setting"></i>
                    <i class="p-3 govsa--mail"></i>
                    <i class="p-3 govsa--lock"></i>
                    <i class="p-3 govsa--external"></i>
                    <i class="p-3 govsa--image"></i>
                    <i class="p-3 govsa--eye"></i>
                    <i class="p-3 govsa--home"></i>
                    <i class="p-3 govsa--notification"></i>
                    <i class="p-3 govsa--renew"></i>
                    <i class="p-3 govsa--chat"></i>
                    <i class="p-3 govsa--close"></i>
                    <i class="p-3 govsa--closed"></i>
                    <i class="p-3 govsa--export"></i>
                    <i class="p-3 govsa--right"></i>
                    <i class="p-3 govsa--left"></i>
                    <i class="p-3 govsa--upload"></i>
                    <i class="p-3 govsa--menu"></i>
                    <i class="p-3 govsa--Color"></i>
                    <i class="p-3 govsa--arrowleft"></i>
                    <i class="p-3 govsa--arrowright"></i>
                    <i class="p-3 govsa--arrowdown"></i>
                    <i class="p-3 govsa--arrowup"></i>
                </div>  
                </div>,
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
                                        <div className="row  bg-gray-pastel mb-3" >
                                            <textarea id="htmlcode" className="d-none"/>
                                            <div className="col-md-12 mb-2" onClick={(event) => copyToClipboard(event)} >
                                                <div className="row">
                                                    <div className="col-md-12 mb-2">
                                                        <Button className="btn govsa-btn--darkBlue mt-3 f-r"  text={t("copy")}></Button>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-2 px-3"> 
                                                    <pre data-module="" id="cod-text">
                                                        <code> 
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--edit"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--delete"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--download"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--contact"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--options"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--favourite"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--star"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--user"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--info"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--zoom"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--alert"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--setting"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--mail"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--lock"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--external"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--image"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--eye"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--home"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--notification"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--renew"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--chat"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--close"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--closed"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--export"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--right"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--left"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--upload"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--menu"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--Color"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--arrowleft"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--arrowright"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--arrowdown"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
                                                            <span>&lt;<span class="text-blue">i</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa--arrowup"</span>&gt;</span><span>&lt;/<span class="text-blue">i</span>&gt;</span><br/>
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
                </div>,
                <div className='bg-white border-radius mt-4'>
                    <div className='bg-white px-4 mt-1'>
                        <div className="col-md-12 mt-4 mb-3 px-0">
                        <div className="accordion govsa-accordion-website" id="accordionExample2">
                            <div className="card">
                                <button className="collapsed card-header" id="headingOne2" data-toggle="collapse" data-target="#collapseOne2" aria-expanded="false" aria-controls="collapseOne2">
                                <img src={UsageIcon} width="40" alt="" />
                                {t("usage")} <i className=" govsa-icon govsa--arrowdown"></i>
                                </button>
                                <div id="collapseOne2" className="collapse" aria-labelledby="headingOne2" data-parent="#accordionExample2">
                                    <div className="card-body pb-3">
                                        <h6>{t("Accessibility")}</h6>
                                        <p>{t("styles_iconography_desc4")}</p>
                                        <p>{t("styles_iconography_desc5")}</p>
                                        <p>{t("styles_iconography_desc6")}</p>
                                        <h6>{t("implemntation")}</h6>
                                        <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-icons' </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            ]
    )
}
}
export default withNamespaces()(Iconography);