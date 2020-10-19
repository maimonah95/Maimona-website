import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import HeadeGovSa from "../../components/headerGovsa";
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import './index.scss';
import'../../assets/highlight/highlight.css'
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Header extends Component {
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
                            <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("components_header")}</h3>
                        </div>
                        <div className='col-md-9' dir="ltr">
                            <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                            <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                        </div>
                    </div>
                    <p className="mt-4">{t("components_header_description-1")}</p>
                    <HeadeGovSa></HeadeGovSa>
                    <p className="mt-4">{t("components_header_description-2")}</p>
                    <ul>
                        <li>{t("components_header_list_1")}</li>
                        <li>{t("components_header_list_2")}</li>
                        <li>{t("components_header_list_3")}</li>
                        <li>{t("components_header_list_4")}</li>
                        <li>{t("components_header_list_5")}</li>
                    </ul>
                  
              
                
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
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex justify-content-between px-3"</span>&gt;</span>
                                                         <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-link"</span>&gt;</span>English site<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> | <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-link"</span>&gt;</span>Contact us<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                         <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                         <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-link"</span>&gt;</span>My Account<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> | <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-link"</span>&gt;</span>Log out<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">header</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-header"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"navbar navbar-expand-lg govsa-header__open-search"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span
                                                        class="hljs-string">"navbar-toggler p-0"</span> <span class="hljs-attr">type</span>=<span
                                                        class="hljs-string">"button"</span> <span class="hljs-attr">data-toggle</span>=<span
                                                        class="hljs-string">"collapse"</span> <span class="hljs-attr">data-target</span>=<span
                                                        class="hljs-string">"#navbarSupportedContent"</span> <span class="hljs-attr">aria-controls</span>=<span
                                                        class="hljs-string">"navbarSupportedContent"</span> <span class="hljs-attr">aria-expanded</span>=<span
                                                        class="hljs-string">"false"</span> <span class="hljs-attr">aria-label</span>=<span
                                                        class="hljs-string">"Toggle navigation"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span
                                                        class="hljs-string">"govsa--menu text-white"</span>&gt;</span><span class="hljs-tag">&lt;/<span
                                                        class="hljs-name">i</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                        class="hljs-string">"govsa-logo"</span> <span class="hljs-attr">href</span>=<span
                                                        class="hljs-string">"#"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span
                                                        class="hljs-string">"./govsa-icons/icon/logo-govsa.svg"</span> <span class="hljs-attr">width</span>=<span
                                                        class="hljs-string">"136"</span> <span class="hljs-attr">alt</span>=<span
                                                        class="hljs-string">""</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                                                        class="hljs-string">"col-md-3 col-4 order-md-2 order-1 p-0"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"input-group govsa-search--header"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span
                                                                class="hljs-string">"text"</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-input govsa-header__search__input"</span> <span
                                                                class="hljs-attr">placeholder</span>=<span class="hljs-string">"search"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"input-group-append"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-clear__button d-none"</span> <span class="hljs-attr">type</span>=<span
                                                                class="hljs-string">"button"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
                                                            <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--closed"</span>&gt;</span><span
                                                            class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span
                                                                class="hljs-name">button</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"input-group-append"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-header__search__button"</span> <span class="hljs-attr">type</span>=<span
                                                                class="hljs-string">"button"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
                                                            <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--zoom"</span>&gt;</span><span
                                                            class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span
                                                                class="hljs-name">button</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"collapse navbar-collapse order-md-1 order-2"</span> <span
                                                                class="hljs-attr">id</span>=<span class="hljs-string">"navbarSupportedContent"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"navbar-nav mr-auto"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"nav nav-tabs govsa-tabs"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"nav-item dropdown govsa-tabs__dropdown"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"nav-link dropdown-toggle"</span> <span class="hljs-attr">data-toggle</span>=<span
                                                                class="hljs-string">"dropdown"</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">"#"</span> <span class="hljs-attr">role</span>=<span
                                                                class="hljs-string">"button"</span> <span class="hljs-attr">aria-haspopup</span>=<span
                                                                class="hljs-string">"true"</span> <span class="hljs-attr">aria-expanded</span>=<span
                                                                class="hljs-string">"false"</span>&gt;</span>About Kingdom <span class="hljs-tag">&lt;<span
                                                                class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-icon
                                                                govsa--arrowdown"</span>&gt;</span><span class="hljs-tag">&lt;/<span
                                                                class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span
                                                                class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-tabs--border"</span>&gt;</span><span class="hljs-tag">&lt;/<span
                                                                class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"dropdown-menu"</span> <span class="hljs-attr">aria-labelledby</span>=<span
                                                                class="hljs-string">"navbarDropdown"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-container--flex-wrap"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-header__list--width"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">""</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Know About Kingdom<span
                                                            class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-header__list--width"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">""</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Digital Transformation<span
                                                            class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-header__list--width"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">""</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Labor and Employment in the Kingdom<span
                                                            class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-header__list--width"</span>&gt;</span><span class="hljs-tag">&lt;<span
                                                                class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">""</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Rules, Regulations and Policies<span
                                                            class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-header__list--width"</span>&gt;</span><span class="hljs-tag">&lt;<span
                                                                class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">""</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Civil Society Partnership<span
                                                            class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-header__list--width"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">""</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>A Humanitarian Kingdom<span
                                                            class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"nav-item"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"nav-link"</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">"#"</span>&gt;</span>Services directory <span class="hljs-tag">&lt;/<span
                                                                class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-tabs--border"</span>&gt;</span><span class="hljs-tag">&lt;/<span
                                                                class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span
                                                                class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"govsa-vison-2030 order-md-3 order-3"</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span
                                                                class="hljs-string">"./images/vision-2030-white.svg"</span> <span class="hljs-attr">width</span>=<span
                                                                class="hljs-string">"68"</span> <span class="hljs-attr">alt</span>=<span
                                                                class="hljs-string">""</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span>
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
                                    <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-header' </p>
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
export default withNamespaces()(Header);
