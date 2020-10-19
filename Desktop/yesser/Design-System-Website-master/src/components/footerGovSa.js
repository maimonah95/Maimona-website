import React from 'react';
import Logo from '../assets/images/logo-govsa.svg';
import Contact from '../assets/images/contact.svg';
import Contrast from '../assets/images/contrast.svg';
import Volume from '../assets/images/volume.svg';
import Facebook from '../assets/images/facebook.svg';
import Linkedin from '../assets/images/linkedin.svg';
import Youtube from '../assets/images/youtube.svg';
import Twitter from '../assets/images/twitter.svg';
import { withNamespaces } from 'react-i18next';

function FooterGovSa({ t }) {
  return (
    <div>
        <footer className="govsa-footer">
            <div className="feedback-container">
                <div className="container">
                    <div className="d-md-flex justify-content-center align-items-center p-md-4 p-3 feedback-container-div">
                        <div className="mx-3">
                            <span> {t("footer-pageHelpful")}
                                <a href="" className="govsa-footer-link">{t("yes")} </a> | <a href=""
                                    className="govsa-footer-link">{t("no")}</a></span>
                        </div>
                        <div className="mx-4 pt-2 pt-md-0">
                            <span>{t("footer-Feedback")}</span>
                        </div>
                    </div>
                </div>
            </div> 

        
            <div className="d-md-flex justify-content-around pt-5 px-2">
                <div>
                    <div className="d-md-flex justify-content-between contact-us-div p-md-0">
                        <div>
                            <img src={Contact} alt="" width="51.48" height="46.85"/>
                        </div>
                        <div className="p-2">
                            <p>{t("Contact-us")} <br/> 199099</p>
                        </div>
                        <div className='p-2'style={{lineHeight: "4.4", verticalAlign:"bottom", fontSize: "14px"}}>
                            <ins> <a href="#" className="footer-link">{t("View-more")}</a> </ins>
                        </div>
                    </div>
                    <div className="footer-bordered-div align-items-center">
                        <div className="d-md-flex justify-content-around align-items-center footer-div-border">
                            <div className="p-2">
                                <img alt="Contrast setting" src={Contrast}/>
                            </div>
                            <div className="p-2">
                                <span> {t("Contrast-setting")}</span>
                            </div>
                            <div className="p-2">
                                <div className="custom-control custom-switch govsa-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitches-footer"/>
                                    <label className="custom-control-label" for="customSwitches-footer"></label>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-flex justify-content-around align-items-center footer-div-border">
                            <div className="p-2">
                                <p className="m-0">A<small>A</small></p>
                            </div>
                            <div className="p-2">
                                <span> {t("Text-setting")}</span>
                            </div>
                            <div className="p-2">
                                <button className="footer-link bg-green-dark border-0">A+</button>
                                <button className="footer-link bg-green-dark border-0"><small>A-</small></button>
                            </div>
                        </div>
                        <div className="d-md-flex justify-content-around align-items-center footer-div-border">
                            <div className="p-2">
                                <img alt=">Screen reader" src={Volume}/>
                            </div>
                            <div className="p-2">
                                <span> {t("Screen-reader")}</span>
                            </div>
                            <div className="p-2">
                                <ins> <a href="#" className="footer-link"> {t("View-more")}</a> </ins>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <ul className="quick-links">
                        <li> {t("Quick-Links")}</li>
                        <li><a href="" className="footer-link">  {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="quick-links">
                        <li> {t("Quick-Links")}</li>
                        <li><a href="" className="footer-link">  {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="quick-links">
                        <li> {t("Quick-Links")}</li>
                        <li><a href="" className="footer-link">  {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                        <li><a href="" className="footer-link"> {t("accordion-lable")}</a></li>
                    </ul>
                </div>
            </div>
            <div className="d-md-flex flex-column social-container justify-content-center align-items-center">
                <img src={Logo} width="200" alt="gov.sa logo" />
                <div className="m-2 d-md-flex social-icons-container">
                    <div className="p-2">
                        <img src={Facebook} alt="" width="36"/>
                    </div>
                    <div className="p-2">
                        <img src={Linkedin}  alt="" width="36"/>
                    </div>
                    <div className="p-2">
                        <img src={Youtube} alt="" width="36"/>
                    </div>
                    <div className="p-2">
                        <img src={Twitter}  alt="" width="36"/>
                    </div>
                </div>
            </div>
            <hr className="footer-divider"/>
            <div className="d-md-flex justify-content-between p-3 footer--terms-div">
            <div className="text-center">
                <a href="#" className="footer-link px-1">Privacy Policy</a>
                <a href="#" className="footer-link px-1">Terms of Use</a>
                <a href="#" className="footer-link px-1">Sitemap</a>
                <a href="#" className="footer-link px-1">RSS</a>
            </div>
            <div className="text-center">
                    <span>
                        Developed and Maintained by YESSER E-Government Program
                    </span>
                </div>
                <div className="text-center">
                    <span>
                        © GOV.SA All Rights Reserved 2019
                    </span>
                </div>
            </div>
        </footer>
    </div>
  );
}
export default withNamespaces()(FooterGovSa);
// export default Footer;

