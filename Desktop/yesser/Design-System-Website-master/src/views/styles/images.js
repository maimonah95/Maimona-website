
import React, { Component } from 'react';
import './index.scss';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import CodeIcon from '../../assets/images/code-icon.svg';
//import Image1 from '../../assets/images/image.png';
import MCITIMG from '../../assets/images/govsa-color.png';
//import BOOTSTRAP from '../../assets/images/bootstrap.png';
import Link from '../../components/link/index';

import Button from '../../components/buttons/index'
import { withNamespaces } from 'react-i18next';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Images extends Component {

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
                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("images")}</h3>
                </div>
                <div className='col-md-10' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
            </div>
            <p className="mt-4">{t("styles_images_desc1")}</p>
            <p>{t("styles_images_desc2")}</p>
            <p>{t("styles_images_desc3")}</p>

            <p className="mb-1 font-weight-bold">{t("styles_images-formats")}</p>
            <ul>
                <li><b>{t("styles_images-formats1-1")} </b> {t("styles_images-formats1-2")}</li>
                <li><b>{t("styles_images-formats2")} </b></li>
            </ul>

            <p className="">{t("styles_images_desc4")}</p>
            
            <p className=""><span className="font-weight-bold">{t("styles_images-ArabicVersion-title")}</span>{t("styles_images-ArabicVersion")}</p>
            <p className="mb-1 font-weight-bold">{t("styles_images-ArabicVersion-formats")}</p>
            <ul>
                <li><b>{t("styles_images-formats1-1")} </b> {t("styles_images-ArabicVersion-formats1-2")}</li>
                <li><b>{t("styles_images-formats2")} </b></li>
            </ul>

            <div class="row">
                <div class="col-md-12 mb-5">
                <p>{t("styles_images-desc-image")}</p>
                    <img src={MCITIMG} height="500" style={{width: "100%"}} alt="image" />
                </div>
            </div>   
            <div className="">
                <div class="col-md-6  my-3 ">
                    <p>{t("styles_images-desc2-image")}</p>
                    <img src={MCITIMG} height="380" style={{width: "100%"}} alt="image" />
                    <div class="col-md-10">
                        <h6> {t("Title-image")}</h6>
                        <p> {t("description-image")}</p>
                        <a class="govsa-link" href=""> {t("link-text")} <i class="govsa-icon govsa--arrowright"></i></a>
                    </div>
                </div>
            </div>
            <p className="mt-4">{t("styles_images-desc3-image")}</p>
            <div id="carouselExampleIndicators" class="carousel slide row justify-content-center" data-ride="carousel">
                <div className="col-md-8">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={MCITIMG} height="380" style={{width: "100%"}} alt="image" />
                    </div>
                    <div class="carousel-item">
                    <img src={MCITIMG} height="380" style={{width: "100%"}} alt="image" />
                    </div>
                    <div class="carousel-item">
                    <img src={MCITIMG} height="380" style={{width: "100%"}} alt="image" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    ,
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
                                            <code class="html hljs xml">
                                                <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/static/media/image.jpg"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"500"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"image"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"carouselExampleIndicators"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"carousel slide col-md-8 offset-md-2"</span> <span class="hljs-attr">data-ride</span>=<span class="hljs-string">"carousel"</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"carousel-indicators"</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">data-target</span>=<span class="hljs-string">"#carouselExampleIndicators"</span> <span class="hljs-attr">data-slide-to</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"active"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">data-target</span>=<span class="hljs-string">"#carouselExampleIndicators"</span> <span class="hljs-attr">data-slide-to</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">data-target</span>=<span class="hljs-string">"#carouselExampleIndicators"</span> <span class="hljs-attr">data-slide-to</span>=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"carousel-inner"</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"carousel-item active"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/static/media/image.jpg"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"380"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"image"</span>
                                                <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"carousel-item"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/static/media/image.jpg"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"380"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"image"</span>
                                                <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"carousel-item"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/static/media/image.jpg"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"380"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"image"</span>
                                                <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
        </div>,
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
                                <h6>{t("guidelines")}</h6>
                                <p className="">{t("styles_images_usage_guidlines")}</p>
                                <h6>{t("implemntation")}</h6>
                                <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-image' </p>
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
export default withNamespaces()(Images);