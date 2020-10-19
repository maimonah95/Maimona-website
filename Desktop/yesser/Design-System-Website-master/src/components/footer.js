import React from 'react';
import Logo from '../assets/images/logo-govsa.svg';
import LinkGov from './link/index';
import { withNamespaces } from 'react-i18next';
import ChateIcon from'../assets/images/chate-icon.svg'
import { Link } from 'react-router-dom';
function Footer({ t }) {
  return (
    <div>
        <div className="text-black box-position justify-content-around pb-5 px-4">
        <div className='row bg-white box-rounded'>
          <div className='col-md-1 col-2'> 
              <img className="support-img" src={ChateIcon} width="45" alt="styels icon" style={{position: "absolute" ,zIndex:"1"}} />
              <div className='bg-circal-spport'></div>
          </div>
          <div className='col-md-3 col-9'>
              <p className='text-darkBlue font-weight-bold pt-3'>{t("gettingInvoloved-section-header")}</p>
          </div>   
          <div className='col-md-7'>
              {/* <p className='pt-3'>{t("gettingInvoloved-section-body-email")}   <LinkGov href="mailto:design@my.gov.sa" text='design@my.gov.sa'/> </p> */}
              <p className="pt-3">{t("gettingInvoloved-section-body-slack-p1")}  <LinkGov href="https://design-govsa.slack.com" text=' #Design-govsa '/>{t("gettingInvoloved-section-body-slack-p2")} </p>
          </div>
        </div>
      </div> 
      <footer className="govsa-footer">
         

      <div className="d-md-flex justify-content-around pt-5">
        <div>
          <div className="d-md-flex justify-content-between px-4 pb-4 text-center">
            <img src={Logo} width="200" alt="gov.sa logo" />
          </div>
        </div>
        <div>
          <ul className="quick-links px-3">
            <li className="font-weight-bold">{t("Channels")}</li>
            <li>
              <a href="https://github.com/GOV-SA/design-system-gov.sa" className="footer-link">
                GitHub
                </a>
            </li>
            <li>
              <a href="https://design-govsa.slack.com" className="footer-link">
                Slack
                </a>
            </li>
            <li>
              <a href="mailto:design@my.gov.sa" className="footer-link">
              {t("send-email")}
                </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="quick-links px-3">
            <li className="font-weight-bold">{t("About-Design-GOV.SA")}</li>
            <li>
              <a href="/about/fordevelopers" className="footer-link">
              {t("Documentation")}
                </a>
            </li>
            <li>
              <a href="/about/updatesandreleases" className="footer-link">
              {t("Updated-Releases")}
                </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="quick-links px-3">
            <li className="font-weight-bold">{t("More")}</li>
            <li>
            <a href="/about/designprinciples" className="footer-link">
              {t("Design-principles")}
                </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="d-md-flex justify-content-center p-3 text-center footer--terms-div">
        {/* <div className="px-3">
          <span>{t("Rights-Reserved")}</span>
        </div> */}
        <div className="px-md-3">
          <span>{t("Developed-Maintained")}</span>
        </div>
        <div>
          <span>{t("Privacy-Policy-Terms")}</span>
        </div>
      </div> 
    </footer>
    </div>
  );
}
export default withNamespaces()(Footer);
// export default Footer;

