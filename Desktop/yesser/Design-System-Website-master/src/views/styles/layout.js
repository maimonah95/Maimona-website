
import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import gridIcon from '../../assets/images/Bitmap-d.svg';
import Pitmap from '../../assets/images/Bitmap.svg';
import Button from '../../components/buttons/index'
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Layout extends Component {
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
            element.classList.remove("d-none");
            element.value=event.target.textContent;
            element.select();
            document.execCommand('copy');
            element.classList.add("d-none");
        }
        return(

                    [
                        <div className='bg-white border-radius p-4'>
                            <div className='row border-bottom'>
                                <div className="col-md-3">
                                    <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("layout")}</h3>
                                </div>
                                <div className='col-md-9' dir="ltr">
                                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                                </div>
                            </div>

                            <p className="mt-4">{t("layout-p1")}</p>
                            <p className="mt-4">{t("layout-p2")}</p>

                            <p className="mb-1 font-weight-bold">{t("styles_layout-mainElements")}</p>
                            <ul>
                                <li><b>{t("styles_layout-mainElements1-1")} </b> {t("styles_layout-mainElements1-2")}</li>
                                <li><b>{t("styles_layout-mainElements2-1")} </b> {t("styles_layout-mainElements2-2")}</li>
                                <li><b>{t("styles_layout-mainElements3-1")} </b> {t("styles_layout-mainElements3-2")}</li>
                                <li><b>{t("styles_layout-mainElements4-1")} </b> {t("styles_layout-mainElements4-2")}</li>
                            </ul>

                            <p className="mt-4 mb-1 font-weight-bold">{t("layout-features")}</p>
                            <ul>
                                <li>{t("layout-li-1")}</li>
                                <li>{t("layout-li-2")}</li>
                                <li>{t("layout-li-3")}</li>
                                <li>{t("layout-li-4")}</li>
                                <li>{t("layout-li-5")}</li>
                            </ul>
                            <p className="mt-4">{t("layout-p3")}</p>
                            <div className='mt-4 text-center pb-3'>
                                <img className="img-width" src={gridIcon} align="middle" alt="" />
                            </div>

                            <p className="mt-4">{t("styles_layout-responsive")}</p> 
                            <p className="mt-4 mb-1 font-weight-bold">{t("styles_layout-responsive-features")}</p>
                            <ul>
                                <li>{t("styles_layout-responsive-features1")}</li>
                                <li>{t("styles_layout-responsive-features2")}</li>
                                <li>{t("styles_layout-responsive-features3")}</li>
                                <li>{t("styles_layout-responsive-features4")}</li>
                                <li>{t("styles_layout-responsive-features5")}</li>
                            </ul>
                            <div className='mt-4 text-center pb-3'>
                                <img className="img-width" src={Pitmap} align="middle" alt="" />
                            </div>
                            

                        </div>
    
                    ]
                )
            }
        }
    
export default withNamespaces()(Layout);