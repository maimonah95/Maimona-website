
import React, { Component } from 'react';
import './index.scss';
import UsageIcon from '../../assets/images/usage-icon.jpg';
import Button from '../../components/buttons/index'
import { withNamespaces } from 'react-i18next';
import CodeIcon from '../../assets/images/code-icon.svg';
import SpacingIcon from '../../assets/images/spacing-img.png';
import Link from '../../components/link/index';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class Spacing extends Component {
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
                    <div className="col-md-2">
                        <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("spacing")}</h3>
                    </div>
                    <div className='col-md-10' dir="ltr">
                        <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                        <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                    </div>
                </div>
                <p class="mt-4">{t("styles_spacing-part1")}</p>
                <p class="mt-4">{t("styles_spacing-part2")}</p>

                <p className="mb-1 font-weight-bold">{t("styles_spacing-scales")}</p>
                <ul>
                    <li><b>{t("styles_spacing-scales1-1")} </b> {t("styles_spacing-scales1-2")}</li>
                    <li><b>{t("styles_spacing-scales2-1")} </b> {t("styles_spacing-scales2-2")}</li>
                </ul>

                <p class="mt-4 mb-1 font-weight-bold">{t("styles_spacing_desc1")}</p>
                <ul>
                    <li><b>{t("styles_spacing_desc6")}</b>{t("styles_spacing_desc2")}</li>
                    <li><b>{t("styles_spacing_desc7")}</b>{t("styles_spacing_desc3")}</li>
                </ul>

        


                <div className='mt-5 text-center pb-3'>
                    <img className="img-width" src={SpacingIcon} align="middle" alt="" />
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
                                    <ul>
                                        <li>{t("styles_spacing_desc4")}</li>
                                        <li>{t("styles_spacing_desc5")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        ])
    }
}
export default withNamespaces()(Spacing);