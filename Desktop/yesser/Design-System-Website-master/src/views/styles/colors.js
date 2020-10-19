import React, { Component } from 'react';
import './index.scss';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import CodeIcon from '../../assets/images/code-icon.svg';
import Button from '../../components/buttons/index'
import { withNamespaces } from 'react-i18next';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Colors extends Component {
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
                        <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("colors")}</h3>
                    </div>
                    <div className='col-md-10' dir="ltr">
                        <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                        <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                    </div>
                </div>
                <p className="mt-4" >{t("styles_colors-part1")}</p>
                <p className="mt-4" >{t("styles_colors-part2")}</p>

                <h5 className="mt-4 text-darkBlue">{t("styles_colors-accessibility-title")}</h5>
                <p className="">{t("styles_colors-accessibility")}</p>

                <h5 className="mt-4 text-darkBlue">{t("styles_colors-Primary-title")}</h5>
                <p className="">{t("styles_colors-Primary")}</p>
                <p className="mb-1 font-weight-bold">{t("styles_colors-Primary-differentRoles")}</p>
                <ul>  
                    <li>{t("styles_colors-Primary-differentRoles1")}</li>
                    <li>{t("styles_colors-Primary-differentRoles2")}</li>
                </ul>
                <div className="row justify-content-center">
                    <div className='flex-column'>
                        <div className="box-color bg-green p-3 my-1 mx-4">
                            <p className='text-white text-center'>Green</p>
                            <p className='text-white text-center'>#266348</p>
                        </div>
                        <div className="box-color bg-green-shade p-3 my-1 mx-4">
                            <p className='text-white text-center'>Shade</p>
                            <p className='text-white text-center'>#066058</p>
                        </div>
                        <div className="box-color bg-green-tint p-3 my-1 mx-4">
                            <p className='text-white text-center'>Tint</p>
                            <p className='text-white text-center'>#27AA8C</p>
                        </div>
                        <div className="box-color bg-green-pastel p-3 my-1 mx-4">
                            <p className='text-white text-center'>Pastel</p>
                            <p className='text-white text-center'>#ACDDC7</p>
                        </div>
                    </div>
                    <div className='flex-column'>
                        <div className="box-color bg-darkBlue p-3 my-1 mx-4">
                            <p className='text-white text-center'>darkBlue</p>
                            <p className='text-white text-center'>#160F3E</p>
                        </div>
                        <div className="box-color bg-darkBlue-shade p-3 my-1 mx-4">
                            <p className='text-white text-center'>Shade</p>
                            <p className='text-white text-center'>#1F255B</p>
                        </div>
                        <div className="box-color bg-darkBlue-tint p-3 my-1 mx-4">
                            <p className='text-white text-center'>Tint</p>
                            <p className='text-white text-center'>#444061</p>
                        </div>
                        <div className="box-color bg-darkBlue-pastel p-3 my-1 mx-4">
                            <p className='text-white text-center'>Pastel</p>
                            <p className='text-white text-center'>#CDCCD5</p>
                        </div>
                    </div>
                </div>
                
                <h5 className="mt-4 text-darkBlue">{t("styles_colors-Secondary-title")}</h5>
                <p className="">{t("styles_colors-Secondary")}</p>
                <div className="row justify-content-center">
                    <div className='flex-column'>
                        <div className="box-color bg-tiffany p-3 my-1 mx-4">
                            <p className='text-white text-center'>Tiffany</p>
                            <p className='text-white text-center'>#0AEBD7</p>
                        </div>
                        <div className="box-color bg-tiffany-shade p-3 my-1 mx-4">
                            <p className='text-white text-center'>Shade</p>
                            <p className='text-white text-center'>#046459</p>
                        </div>
                        <div className="box-color bg-tiffany-tint p-3 my-1 mx-4">
                            <p className='text-white text-center'>Tint</p>
                            <p className='text-white text-center'>#4ECEBB</p>
                        </div>
                        <div className="box-color bg-tiffany-pastel p-3 my-1 mx-4">
                            <p className='text-white text-center'>Pastel</p>
                            <p className='text-white text-center'>#A9E2D7</p>
                        </div>
                    </div>
                    <div className='flex-column'>
                        <div className="box-color bg-blue p-3 my-1 mx-4">
                            <p className='text-white text-center'>Blue</p>
                            <p className='text-white text-center'>#005A96</p>
                        </div>
                        <div className="box-color bg-blue-shade p-3 my-1 mx-4">
                            <p className='text-white text-center'>Shade</p>
                            <p className='text-white text-center'>#0053BA</p>
                        </div>
                        <div className="box-color bg-blue-tint p-3 my-1 mx-4">
                            <p className='text-white text-center'>Tint</p>
                            <p className='text-white text-center'>#0054AE</p>
                        </div>
                        <div className="box-color bg-blue-pastel p-3 my-1 mx-4">
                            <p className='text-white text-center'>Pastel</p>
                            <p className='text-white text-center'>#AC9FD5</p>
                        </div>
                    </div>
                    <div className='flex-column'>
                        <div className="box-color bg-violet p-3 my-1 mx-4">
                            <p className='text-white text-center'>Violet</p>
                            <p className='text-white text-center'>#5505CD</p>
                        </div>
                        <div className="box-color bg-violet-shade p-3 my-1 mx-4">
                            <p className='text-white text-center'>Shade</p>
                            <p className='text-white text-center'>#3C2B7D</p>
                        </div>
                        <div className="box-color bg-violet-tint p-3 my-1 mx-4">
                            <p className='text-white text-center'>Tint</p>
                            <p className='text-white text-center'>#5830B4</p>
                        </div>
                        <div className="box-color bg-violet-pastel p-3 my-1 mx-4">
                            <p className='text-white text-center'>Pastel</p>
                            <p className='text-white text-center'>#AC9FD5</p>
                        </div>
                    </div>
                </div>

                <h5 className="mt-4 text-darkBlue">{t("styles_colors-System-title")}</h5>
                <p className="">{t("styles_colors-System")}</p>
                <div className='row'>
                    <div className='col-md-1 mt-3'><div className='box-color-small bg-success'></div></div>
                    <div className="col-md-2 mt-4"><p className=''>#006604</p></div>
                    <div className="col-md-4 mt-4"><p className=''>{t("styles_colors_desc7")}</p></div>
                </div>
                <div className='row'>
                    <div className='col-md-1 mt-3'><div className='box-color-small bg-danger'></div></div>
                    <div className="col-md-2 mt-4"><p className=''>#AF0818</p></div>
                    <div className="col-md-4 mt-4"><p className=''>{t("styles_colors_desc8")}</p></div>
                </div>
                <div className='row'>
                    <div className='col-md-1 mt-3'><div className='box-color-small bg-orange'></div></div>
                    <div className="col-md-2 mt-4"><p className=''>#FD7E14</p></div>
                    <div className="col-md-4 mt-4"><p className=''>{t("styles_colors_desc9")}</p></div>
                </div>
                <div className='row'>
                    <div className='col-md-1 mt-3'><div className='box-color-small bg-warning'></div></div>
                    <div className="col-md-2 mt-4"><p className=''>#FFC107</p></div>
                    <div className="col-md-4 mt-4"><p className=''>{t("styles_colors_desc10")}</p></div>
                </div>

                <h5 className="mt-4 text-darkBlue">{t("styles_colors-Neutral-title")}</h5>
                <p className="">{t("styles_colors-Neutral")}</p>
                <div className="row justify-content-center mb-2">
                    <div className='d-block d-md-flex flex-row'>
                        <div className="box-color bg-black p-3 mx-1 my-1">
                            <p className='text-white text-center'>Black</p>
                            <p className='text-white text-center'>#000000</p>
                        </div>
                        <div className="box-color bg-gray p-3 mx-1 my-1">
                            <p className='text-white text-center'>Gray</p>
                            <p className='text-white text-center'>#323232</p>
                        </div>
                        <div className="box-color bg-gray-shade py-3 px-2 mx-1 my-1">
                            <p className='text-white text-center'>Gray Shade</p>
                            <p className='text-white text-center'>#242424</p>
                        </div>
                        <div className="box-color bg-gray-tint py-3 px-2 mx-1 my-1">
                            <p className='text-white text-center'>Gray Tint</p>
                            <p className='text-white text-center'>#595959</p>
                        </div>
                        <div className="box-color bg-gray-pastel py-3 px-2 mx-1 my-1">
                            <p className='text-black text-center'>Gray Pastel</p>
                            <p className='text-black text-center'>#EAEAEA</p>
                        </div>
                    </div>
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
                                        <div className="col-md-12 mb-2" onClick={(event) => copyToClipboard(event)}>
                                            <div className="row">
                                                <div className="col-md-12 mb-2">
                                                    <Button className="btn govsa-btn--darkBlue mt-3 f-r"  text={t("copy")}></Button>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-2 px-3"> 
                                                <pre data-module="" id="cod-text">
                                                    <code> 
                                                       <span className="text-black-50">//background colors</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-green"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-green-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-green-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-tiffany"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-tiffany-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-tiffany-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-tiffany-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-blue"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-blue-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-blue-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-blue-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-violet"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-violet-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-violet-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-violet-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-darkBlue"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-darkBlue-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-darkBlue-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-darkBlue-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-success"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-danger"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-orange"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-warning"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-black"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-gray"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-gray-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-gray-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"bg-gray-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span className="text-black-50">//text colors</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-green"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-green-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-green-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-tiffany"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-tiffany-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-tiffany-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-tiffany-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-blue"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-blue-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-blue-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-blue-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-violet"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-violet-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-violet-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-violet-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-darkBlue"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-darkBlue-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-darkBlue-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-darkBlue-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-success"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-danger"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-orange"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-warning"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-black"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-gray"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-gray-shade"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-gray-tint"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
                                                        <span>&lt;<span class="text-blue">div</span> <span class="text-green">class</span>=<span class="text-danger ">"text-gray-pastel"</span>&gt;</span><span>&lt;/<span class="text-blue">div</span>&gt;</span><br/>
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
            <div className='bg-white border-radius mt-3'>
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
                                    <p>{t("styles_colors_desc15")}</p>
                                    <p>{t("styles_colors_desc16")}</p>
                                    <ul>
                                        <li>{t("styles_colors_desc17")}</li>
                                        <li>{t("styles_colors_desc18")}</li>
                                        <li>{t("styles_colors_desc19")}</li>
                                    </ul>
                                    
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
export default withNamespaces()(Colors);