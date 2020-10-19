import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Table from "../../components/table";
import Button from '../../components/buttons/index'
import CodeIcon from '../../assets/images/code-icon.svg';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import './index.scss';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class TableHome extends Component {
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
                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("components_table")}</h3>
                </div>
                <div className='col-md-9' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
            </div>
            <p className="mt-4">{t("components_table_description-1")}</p>
            <p className="mt-4">{t("components_table_description-2")}</p>
            <p className="mt-4">{t("components_table_description-3")}</p>
            <p className="mt-4">{t("components_table_description-5")}</p>

            <h5 className="mt-4 text-darkBlue">{t("components_table-StandardTable-title")}</h5>
            <p className="">{t("components_table-StandardTable")}</p>

            <h5 className="mt-4 text-darkBlue">{t("components_table-Accessibility-title")}</h5>
            <p className="">{t("components_table-Accessibility")}</p>

            <h5 className="mt-4 text-darkBlue">{t("components_table-InteractiveTable-title")}</h5>
            <p className="">{t("components_table-InteractiveTable")}</p>
            <p className="mt-4 mb-1">{t("components_table-InteractiveTable-desc2")}</p>
            <p className="mb-1">{t("components_table-forExample")}</p>
            <ul>  
                <li>{t("components_table-forExample1")}</li>
                <li>{t("components_table-forExample2")}</li>
            </ul>

            <h5 className="mt-4 text-darkBlue">{t("components_table-arabic-title")}</h5>
            <p className="mb-5">{t("components_table-arabic")}</p>

            <Table></Table>
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
                                                <code>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">div </span> 
                                                        <span class="text-green"> class </span>
                                                        =
                                                        <span class="text-danger "> "govsa-table" </span>
                                                        &gt;
                                                    </span>
                                                    <br/>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">table </span> 
                                                        <span class="text-green"> class </span>
                                                        =
                                                        <span class="text-danger "> "table" </span>
                                                        &gt;
                                                    </span>
                                                    <br/>
                                                
                                                    <span >
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        &lt;
                                                        <span class="text-blue">thead </span> 
                                                        &gt;
                                                    </span>
                                            
                                                    <br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span>&lt;<span class="text-blue">tr</span> &gt;</span><br/>

                                                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <span>&lt;<span class="text-blue">th</span> &gt;</span> Column title
                                                            <span>&lt;/<span class="text-blue">th</span>&gt;</span><br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <span>&lt;<span class="text-blue">th</span> &gt;</span> Column title
                                                            <span>&lt;/<span class="text-blue">th</span>&gt;</span><br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <span>&lt;<span class="text-blue">th</span> &gt;</span> Column title
                                                            <span>&lt;/<span class="text-blue">th</span>&gt;</span><br/>

                                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <span>&lt;/<span class="text-blue">tr</span>&gt;</span><br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span>
                                                        &lt;/
                                                        <span class="text-blue">thead </span>
                                                        &gt;
                                                    </span><br/> &nbsp;&nbsp;&nbsp;&nbsp; 
                                                <span >
                                                        &lt;
                                                        <span class="text-blue">tbody </span> 
                                                        &gt;
                                                    </span> <br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">tr</span> 
                                                        &gt;
                                                    </span>
                                                    <br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">td</span> 
                                                        &gt;
                                                    </span>
                                                    Line content
                                                
                                                    <span>
                                                        &lt;/
                                                        <span class="text-blue">td</span>
                                                        &gt;
                                                    </span>
                                                    <br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">td</span> 
                                                        &gt;
                                                    </span>
                                                    Line content
                                                
                                                    <span>
                                                        &lt;/
                                                        <span class="text-blue">td</span>
                                                        &gt;
                                                    </span>
                                                    <br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">td</span> 
                                                        &gt;
                                                    </span>
                                                    Line content
                                                
                                                    <span>
                                                        &lt;/
                                                        <span class="text-blue">td</span>
                                                        &gt;
                                                    </span>
                                                <br/> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span>
                                                        &lt;/
                                                        <span class="text-blue">tr</span>
                                                        &gt;
                                                    </span>
                                                    <br/>
                                                
                                                    <span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/
                                                        <span class="text-blue">tbody </span>
                                                        &gt;
                                                    </span> <br/>

                                                    <span>
                                                        &lt;/
                                                        <span class="text-blue">table </span>
                                                        &gt;
                                                    </span>
                                                    <span>
                                                        &lt;/
                                                        <span class="text-blue">div </span>
                                                        &gt;
                                                    </span>
                                                    <span className="d-block">// Interactive Table</span>
                                                    <span >
                                                        &lt;
                                                        <span class="text-blue">div </span> 
                                                        <span class="text-green"> class </span>
                                                        =
                                                        <span class="text-danger "> "govsa-table" </span>
                                                        &gt;
                                                    </span>
                                                    <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">'table'</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox"</span>&gt;</span> title
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox__checkmark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span> title<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span> title<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox"</span>&gt;</span>Label
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox__checkmark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Line content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Line content<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--delete pull-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--edit mx-0 mx-md-4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox"</span>&gt;</span>Label
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox__checkmark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Line content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Line content<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--delete pull-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--edit mx-0 mx-md-4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox"</span>&gt;</span>Label
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox__checkmark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Line content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Line content<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--delete pull-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--edit mx-0 mx-md-4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox"</span>&gt;</span>Label
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span>&gt;</span>
                                                                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa-checkbox__checkmark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Line content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                                                                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Line content<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

                                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--delete pull-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                                                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"govsa--edit mx-0 mx-md-4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                                                <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                                                            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
                                                        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
                                                    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
                                                    <span>
                                                        &lt;/
                                                        <span class="text-blue">div </span>
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
                                <li><b>{t("components_table_list_1")} </b> {t("components_table_list_1-2")}</li>
                                <li><b>{t("components_table_list_2")} </b> {t("components_table_list_2-2")}</li>
                            </ul>
                            <h6 className="mt-3">{t("implemntation")}</h6>
                            <p className="mb-0">{t("package-usage")}: import 'govsa-ds/packages/govsa-table' </p>
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
export default withNamespaces()(TableHome);