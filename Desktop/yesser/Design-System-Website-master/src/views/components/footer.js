import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import FooterGovSa from "../../components/footerGovSa";
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import './index.scss';
import'../../assets/highlight/highlight.css'
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Footer extends Component {
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
                            <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("components_footer")}</h3>
                        </div>
                        <div className='col-md-9' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
                    </div>
                    <p className="mt-4 mb-4">{t("components_footer_description-1")}</p>
                    <FooterGovSa></FooterGovSa>
                    
                    
                    <p className="mt-4 mb-1 font-weight-bold">{t("components_footer_description-2")}</p>
                    <ul>
                        <li>{t("components_footer-section1")}</li>
                        <li>{t("components_footer-section2")}</li>
                        <li>{t("components_footer-section3")}</li>
                    </ul>
                    
                    <h5 className="mt-4 text-darkBlue">{t("components_footer-Arabic-title")}</h5>
                    <p className="mb-1">{t("components_footer-Arabic")}</p>
                
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
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">footer</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-footer"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"feedback-container"</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-md-flex justify-content-center align-items-center p-md-4 p-3 feedback-container-div"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-3"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Is this page helpful to you?
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-footer-link"</span>&gt;</span>Yes  <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> |  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span>
                                                                            <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-footer-link"</span>&gt;</span>No <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-4 pt-2 pt-md-0"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>60% of vistors said yes from 2843 Feedback <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-md-flex justify-content-around pt-5 px-2"</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"contact-us-div d-md-flex justify-content-between p-md-0"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">""</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./images/contact.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"51.48"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"46.85"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>CONTACT US  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span> 199099 <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'p-2'</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"line-height: 4.4;vertical-align: bottom;font-size: 14px;"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">ins</span>&gt;</span>  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>View more <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>  <span class="hljs-tag">&lt;/<span class="hljs-name">ins</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-bordered-div align-items-center"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-md-flex justify-content-around align-items-center footer-div-border"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Contrast setting"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./images/contrast.svg"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Contrast setting <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"custom-control custom-switch govsa-switch"</span>&gt;</span>
                                                                                <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"custom-control-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"customSwitches-footer"</span>&gt;</span>
                                                                                <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"custom-control-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"customSwitches-footer"</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-md-flex justify-content-around align-items-center footer-div-border"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-0"</span>&gt;</span>A <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>A <span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Text setting <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link bg-green-dark border-0"</span>&gt;</span>A+ <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link bg-green-dark border-0"</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>A- <span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-md-flex justify-content-around align-items-center footer-div-border"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"&gt;Screen reader"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./images/volume.svg"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Screen reader <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">ins</span>&gt;</span>  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>View more <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>  <span class="hljs-tag">&lt;/<span class="hljs-name">ins</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"quick-links"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Quick Links <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span> GCC eGovernment Portals <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Government Procurement <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Employment in the Kingdom <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Sustainable Development <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Governement Open Data <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Services Index <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"quick-links"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Quick Links <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span> GCC eGovernment Portals <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Government Procurement <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Employment in the Kingdom <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Sustainable Development <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Governement Open Data <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Services Index <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"quick-links"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Quick Links <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span> GCC eGovernment Portals <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Government Procurement <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Employment in the Kingdom <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Sustainable Development <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Governement Open Data <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link"</span>&gt;</span>Services Index <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-md-flex flex-column social-container justify-content-center align-items-center"</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./images/logo-govsa.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"89.99"</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-2 d-md-flex social-icons-container"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./images/facebook.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"36"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./images/linkedin.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"36"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./images/youtube.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"36"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./images/twitter.svg"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"36"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-divider"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-md-flex justify-content-between p-3 footer--terms-div"</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link px-1"</span>&gt;</span>Privacy Policy <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link px-1"</span>&gt;</span>Terms of Use <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link px-1"</span>&gt;</span>Sitemap <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer-link px-1"</span>&gt;</span>RSS <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
                                                                Developed and Maintained by YESSER E-Government Program
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
                                                                © GOV.SA All Rights Reserved 2019
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">footer</span>&gt;</span>
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
                                    <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-footer' </p>
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
export default withNamespaces()(Footer);
