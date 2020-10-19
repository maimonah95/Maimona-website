import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import CodeIcon from '../../assets/images/code-icon.svg';
import Button from '../../components/buttons/index'
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
import typographyen from '../../assets/images/typography.png'

class Typography extends Component {
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
                <div className="col-md-3">
                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("styles_typography_title")}</h3>
                </div>
                <div className='col-md-9' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
            </div>

            <p className="mt-4">{t("styles_typography_desc1")}</p>
            <p>{t("styles_typography_desc2")}</p>
            <p className='mb-4'>{t("styles_typography_desc3")}</p>
            <ul>
                <li><b>{t("styles_typography-Plain-title")} </b> {t("styles_typography-Plain")}</li>
                <li><b>{t("styles_typography-SemiLight-title")} </b> {t("styles_typography-SemiLight")}</li>
                <li><b>{t("styles_typography-PlainItalic-title")} </b> {t("styles_typography-PlainItalic")}</li>
                <li><b>{t("styles_typography-Bold-title")} </b> {t("styles_typography-Bold")}</li>
            </ul>
            <h5 className="mt-4 text-darkBlue">{t("styles_typography-Heading-title")}</h5>
            <p className="">{t("styles_typography-Heading")}</p>

            <p className="mb-1 font-weight-bold">{t("styles_typography-differenTypeHeadings")}</p>
            <ul>  
                <li>{t("styles_typography-Heading-1")}</li>
                <li>{t("styles_typography-Heading-2")}</li>
                <li>{t("styles_typography-Heading-3")}</li>
            </ul>
            <h5 className="mt-4 text-darkBlue">{t("styles_typography-Body")}</h5>
            <p className=""><span className="font-weight-bold">{t("styles_typography-BodyText")}</span>{t("styles_typography-BodyText-desc")}</p>
           
            <h5 className="mt-4 text-darkBlue">{t("styles_typography-Subtitle")}</h5>
            <p className="mb-1 font-weight-bold">{t("styles_typography-Subtitle-desc")}</p>
            <ul>  
                <li>{t("styles_typography-Subtitle-1")}</li>
                <li>{t("styles_typography-Subtitle-2")}</li>
            </ul>

            <h5 className="mt-4 text-darkBlue">{t("styles_typography-Caption")}</h5>
            <p className="mb-1 font-weight-bold">{t("styles_typography-Caption-desc")}</p>
            <ul>  
                <li>{t("styles_typography-Caption-1")}</li>
                <li>{t("styles_typography-Caption-2")}</li>
            </ul>

            <h5 className="mt-4 text-darkBlue">{t("overview")}</h5>
            <p className="mb-1">{t("styles_typography-TypographyOverview")}</p>
            <p className="mb-1 mt-2 font-weight-bold">{t("styles_typography-TypographyCategories")}</p>
            <ul>  
                <li>{t("styles_typography-TypographyCategory-1")}</li>
                <li>{t("styles_typography-TypographyCategory-2")}</li>
                <li>{t("styles_typography-TypographyCategory-3")}</li>
            </ul>

            <h5 className="mt-4 text-darkBlue">{t("styles_typography-Accessbility")}</h5>
            <p className="">{t("styles_typography-Accessbility-desc")}</p>

            <h5 className="mt-4 text-darkBlue">{t("styles_typography-ArabicTypography")}</h5>
            <p className="">{t("styles_typography-ArabicTypography-desc")}</p>
            <p className="mb-1 mt-2 font-weight-bold">{t("styles_typography-differencesTypography")}</p>
            <ul>  
                <li>{t("styles_typography-differencesTypography-1")}</li>
                <li>{t("styles_typography-differencesTypography-2")}</li>
                <li>{t("styles_typography-differencesTypography-3")}</li>
            </ul> 
            <p className="mb-5">{t("styles_typography-ArabicTypography-desc-2")}</p>
            <div className='mt-4 text-center pb-3'>
                <img className="img-width" src={typographyen} style={{"width":" 100%"}} align="middle" alt="typography" />
            </div>
            {/* <div className='row'>
                <div className="col-md-3 mt-3 ">
                    <p className='govsa-body--1'>{t("Headline-font-h1")}</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <h1>{t("Headline1")}</h1>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3 mt-2">
                    <p className='govsa-body--1'>{t("Headline-font-h2")}</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <h2>{t("Headline2")}</h2>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>{t("Headline-font-h3")}</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <h3>{t("Headline3")}</h3>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>{t("Headline-font-h4")}</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <h4>{t("Headline4")}</h4>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>{t("Headline-font-h5")}</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <h5>{t("Headline5")}</h5>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>{t("Headline-font-h6")}</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <h6>{t("Headline6")}</h6>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-subtitle">
                        Subtitle 1
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-subtitle--underline">
                        Subtitle 2
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-body--1">
                        Body 1
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-body--2">
                        Body 2
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-body--bold--1">
                        Body 1
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-body--bold--2">
                        Body 2
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3 mt-2">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-btn--1">
                        Button 1
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-btn--2">
                        Button 2
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <p className="govsa-btn--3">
                        Button 3
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <footer className="col-12 p-0 govsa-footer--1">
                        Footer 1
                    </footer>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-3">
                    <p className='govsa-body--1'>H1 | The Sans Bold 60 px</p>
                </div>
                <div className="col-md-6 border-dotted">
                    <footer className="col-12 p-0 govsa-footer--2">
                        Footer 2
                    </footer>
                </div>
            </div> */}

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
                                <div className="row  bg-gray-pastel mb-3">
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
                                                    <span>&lt;<span class="text-blue">h1</span>&gt;</span>H1 Headline<span>&lt;/<span class="text-blue">h1</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">h2</span>&gt;</span>H2 Headline<span>&lt;/<span class="text-blue">h2</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">h3</span>&gt;</span>H3 Headline<span>&lt;/<span class="text-blue">h3</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">h4</span>&gt;</span>H4 Headline<span>&lt;/<span class="text-blue">h4</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">h5</span>&gt;</span>H5 Headline<span>&lt;/<span class="text-blue">h5</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">h6</span>&gt;</span>H6 Headline<span>&lt;/<span class="text-blue">h6</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-subtitle"</span>&gt;</span>Subtitle 1<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-subtitle--underline"</span>&gt;</span>Subtitle 2<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-body--1"</span>&gt;</span>Body 1<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-body--2"</span>&gt;</span>Body 2<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-body--bold--1"</span>&gt;</span>Body 1<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-body--bold--2"</span>&gt;</span>Body 2<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-btn--1"</span>&gt;</span>Button 1<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-btn--2"</span>&gt;</span>Button 2<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">p</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-btn--3"</span>&gt;</span>Button 3<span>&lt;/<span class="text-blue">p</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">footer</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-footer--1"</span>&gt;</span>Footer 1<span>&lt;/<span class="text-blue">footer</span>&gt;</span><br/>
                                                    <span>&lt;<span class="text-blue">footer</span> <span class="text-green">class</span>=<span class="text-danger ">"govsa-footer--2"</span>&gt;</span>Footer 2<span>&lt;/<span class="text-blue">footer</span>&gt;</span><br/>
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
                    
    ]
   )
  }
}        
export default withNamespaces()(Typography);