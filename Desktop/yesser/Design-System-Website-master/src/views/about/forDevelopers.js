import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Developer from '../../assets/images/img_developers.png';
class ForDevelopers extends Component {
    render(){
        const { t, i18n } = this.props;

        return(
            <div className='bg-white border-radius p-4'>
                <div className='row border-bottom'>
                    <div className="col-md-12">
                        <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("ForDevelopers")}</h3>
                        
                    <img className="img-width" src={Developer} align="middle" alt="" width="100%"/>
             
                        <p className="mt-2">{t("ForDevelopers_description-1")}</p>
                    </div>
                </div>
                <h4 className="text-darkBlue mt-4">{t("GettingStarted")}</h4>
                <p className="mt-3">{t("ForDevelopers_description-2")}</p>
                <p className="mt-3 mb-2">{t("ForDevelopers_description-4")}</p>
                <ul>
                    <li><a href="#DownloadTheDesignSystem" className="govsa-link">{t("ForDevelopers_options-1")}</a> {t("ForDevelopers_options-1-2")}</li>
                    <li><a href="#UseTheDesignSystemNpmPackage" className="govsa-link">{t("ForDevelopers_options-2")}</a> {t("ForDevelopers_options-2-2")}</li>
                </ul>
                <p className="mt-4">{t("ForDevelopers_description-5")}</p>

                <a name="DownloadTheDesignSystem"><h4 className="text-darkBlue mt-4">{t("Download_section-header")}</h4></a>
                <ol className="govsa-order-list">
                    <li>{t("Download_section-step-1")}</li>
                    <p className="mt-2">{t("Download_section-dependencies-1")}</p>
                    <div dir="ltr" id="cod-text" className="bg-gray-pastel p-3 rounded mb-3">
                        <span className="d-block">GOV.SA-design-system/</span> 
                        <span className="d-block">├── css/</span>
                        <span className="d-block">│   ├── govsa-ds.min.css.map</span> 
                        <span className="d-block">│   ├── govsa-ds.min.css</span> 
                        <span className="d-block">│   └── govsa-ds.css</span> 
                        <span className="d-block">├── fonts/</span> 
                        <span className="d-block">├── img/</span> 
                        <span className="d-block">├── js/</span> 
                        <span className="d-block">│   ├── govsa-ds.min.js.map</span> 
                        <span className="d-block">│   ├── govsa-ds.min.js</span> 
                        <span className="d-block">│   └── govsa-ds.js</span> 
                        <span className="d-block">└── scss/</span> 
                    </div>
                    <li>{t("Download_section-step-2")}</li>
                    <p className="mt-2">{t("Download_section-dependencies-2")}</p>
                    <div dir="ltr" id="cod-text" className="bg-gray-pastel p-3 rounded mb-3">
                        <span className="d-block">example-project/</span>
                        <span className="d-block">├── assets/</span>
                        <span className="d-block">│   ├── GOV.SA-design-system</span>
                        <span className="d-block">│   ├── stylesheets/</span>
                        <span className="d-block">│   ├── images/</span>
                        <span className="d-block">│   └── javascript/</span>
                        <span className="d-block">└── index.html</span>
                    </div>
                    <li>{t("Download_section-step-3")}</li>
                    <p className="mt-2 font-weight-bold">{t("Download_section-dependencies-3")}</p>
                    <p className="mt-2"><span className="font-weight-bold"> {t("Download_section-dependencies-4-1")}</span>{t("Download_section-dependencies-4-2")}</p>
                    <div className="bg-gray-pastel p-3 rounded mb-3">
                    <pre dir="ltr" id="cod-text" style={{maxHeight: '100%'}}>    
                        <code class="html hljs xml">
                            <span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
                            <span class="hljs-tag"> &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span class="hljs-name">head</span>&gt;</span>
                                <span class="hljs-tag"> &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"utf-8"</span> /&gt;</span>
                                <span class="hljs-tag"> &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">"X-UA-Compatible"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"IE=edge"</span> /&gt;</span>
                                <span class="hljs-tag d-inline"> &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span class="hljs-name d-inline">title</span>&gt;</span>My Example Project<span class="hljs-tag d-inline">&lt;/<span class="hljs-name">title</span>&gt;</span>
                                <span class="hljs-tag"> &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> 
                                <span class="hljs-attr">href</span>=<span class="hljs-string">"assets/Gov.sa-design-system/css/govsa-ds.min.css"</span> /&gt;</span>
                            <span class="hljs-tag"> &nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span class="hljs-name">head</span>&gt;</span>
                            <span class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp; &lt;<span class="hljs-name">body</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span> <span class="hljs-attr">dirc</span>= <span class="hljs-string">"tr"</span>&gt;</span>
                                <span class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"assets/ Gov.sa-design-system /js/govsa-ds.min.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                            <span class="hljs-tag">&nbsp;&nbsp;&nbsp;&nbsp; &lt;/<span class="hljs-name">body</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
                        </code>
                    </pre>
                    </div>
                </ol>
               <a name="UseTheDesignSystemNpmPackage"></a> <h4 className="text-darkBlue mt-4">{t("npm_section-header")}</h4>
                <ol className="govsa-order-list">
                    <li>{t("npm_section-step-1")}</li>
                    <li>{t("npm_section-step-2")}</li>
                    <li>{t("npm_section-step-3")}</li>
                </ol>
                <p className="font-weight-bold">{t("npm_section-dependencies-1")}</p>
                
                <div dir="ltr" id="cod-text" className="bg-gray-pastel p-3 rounded mb-3">
                    <span className="d-block">node_modules/govsa-ds/</span>
                    <span className="d-block">├── dist/</span>
                    <span className="d-block">│   ├── css/</span>
                    <span className="d-block">│   ├── fonts/</span>
                    <span className="d-block">│   ├── img/</span>
                    <span className="d-block">│   └──  js/</span>
                    <span className="d-block">├──fonts/</span>
                    <span className="d-block">├──govsa-icons/</span>
                    <span className="d-block">├──images/</span>
                    <span className="d-block">├──js</span>
                    <span className="d-block">├──Scss/</span>
                    <span className="d-block">├──typography/</span>
                    <span className="d-block">├── packages/ </span>
                    <span className="d-block">└── index.html</span>
                </div>
                <p><span className="font-weight-bold">{t("npm_section-dependencies-2-1")}</span>{t("npm_section-dependencies-2-2")}</p>

                <h4 className="text-darkBlue mt-4">{t("Using_system_package-header")}</h4>
                <p> {t("Using_system_package-dependencies-1-1")} <a href="https://gulpjs.com/" className="govsa-link"> {t("Using_system_package-dependencies-1-2")} </a> {t("Using_system_package-dependencies-1-3")} <a href="https://github.com/GOV-SA/Gulp" className="govsa-link"> {t("Using_system_package-dependencies-1-4")} </a> {t("Using_system_package-dependencies-1-5")} </p>
                <h6>{t("Import_Styles-header")}</h6>
                <div dir="ltr" id="cod-text" className="bg-gray-pastel p-3 rounded mb-3">
                    <span className="d-block">scss/ </span>
                    <span className="d-block">├── theme/</span>
                    <span className="d-block">│   ├── govsa-theme-required.scss </span>
                    <span className="d-block">│   └── govsa-theme-global.scss </span>
                    <span className="d-block">│</span>
                    <span className="d-block">├──packges/</span>
                    <span className="d-block">│   ├── govsa-accordion.scss</span>
                    <span className="d-block">│   ├── govsa-alert.scss</span>
                    <span className="d-block">│   ├── govsa-breadcrumb.scss</span>
                    <span className="d-block">│   ├── govsa-button.scss</span>
                    <span className="d-block">│   ├── govsa-card.scss</span>
                    <span className="d-block">│   ├── govsa-checkbox.scss</span>
                    <span className="d-block">│   ├── govsa-dropdown.scss</span>
                    <span className="d-block">│   ├── govsa-header.scss</span>
                    <span className="d-block">│   ├── govsa-footer.scss</span>
                    <span className="d-block">│   ├── govsa-file-upload.scss</span>
                    <span className="d-block">│   ├── govsa-icons.scss</span>
                    <span className="d-block">│   ├── govsa-image.scss</span>
                    <span className="d-block">│   ├── govsa-link.scss</span>
                    <span className="d-block">│   ├── govsa-outlin.scss</span>
                    <span className="d-block">│   ├── govsa-pagniation.scss</span>
                    <span className="d-block">│   ├── govsa-radio.scss</span>
                    <span className="d-block">│   ├── govsa-search.scss</span>
                    <span className="d-block">│   ├── govsa-sid-navigation.scss</span>
                    <span className="d-block">│   ├── govsa-switch.scss</span>
                    <span className="d-block">│   ├── govsa-table.scss</span>
                    <span className="d-block">│   ├── govsa-tabs.scss</span>
                    <span className="d-block">│   ├── govsa-tage.scss</span>
                    <span className="d-block">│   └── govsa-text-input.scss</span>
                </div>
                <ul>
                    <li>{t("Import_Styles-dependencies-1")}</li>
                    <li>{t("Import_Styles-dependencies-2")}</li>
                </ul>
                <h6>{t("mport_Styles_way_to_import")}</h6>
                <p>{t("mport_Styles_way_to_import-1")}</p>
                <div dir="ltr" id="cod-text" className="bg-gray-pastel p-3 rounded mb-3">
                    <span className="d-block">@import " govsa-ds "</span>
                </div>
                <p>{t("mport_Styles_way_to_import-2")}</p>
                <div dir="ltr" id="cod-text"  className="bg-gray-pastel p-3 rounded mb-3">
                    <span className="d-block">@import "node_modules/govsa-ds/theme/govsa-theme-required.scss"</span>
                    <span className="d-block">@import "node_modules/govsa-ds/packages/govsa-button.scss"</span>
                </div>
                <p><span className="font-weight-bold">{t("Import_Styles-dependencies-3-1")}</span>{t("Import_Styles-dependencies-3-2")}</p>

                <h6>{t("Import_JavaScript-header")}</h6>
                <p>{t("Import_JavaScript-dependencies-1")}</p>
                <div dir="ltr" id="cod-text" className="bg-gray-pastel p-3 rounded mb-3">
                    <span className="d-block">├── js/</span>
                    <span className="d-block">│   ├── file-upload.js </span>
                    <span className="d-block">│   ├── search.js </span>
                    <span className="d-block">│   ├── side-navigation.js </span>
                    <span className="d-block">│   ├── tag.js </span>
                    <span className="d-block">│   └── govsa-ds.js </span>
                </div>
                <ul>
                    <li>{t("Import_JavaScript-dependencies-2")}</li>
                    <li>{t("Import_JavaScript-dependencies-3")}</li>
                    <li>{t("Import_JavaScript-dependencies-4")}</li>
                    <li>{t("Import_JavaScript-dependencies-5")}</li>
                    <li>{t("Import_JavaScript-dependencies-6")}</li>
                </ul>
            </div>   
        )
    }
}

export default  withNamespaces()(ForDevelopers);