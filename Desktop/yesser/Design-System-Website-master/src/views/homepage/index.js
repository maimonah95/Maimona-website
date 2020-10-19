import React, { Component } from 'react';
import Button from '../../components/buttons/index'
import LinkGov from '../../components/link/index';
import { Link } from 'react-router-dom';
import stylesIcon from '../../assets/images/styles-icon.svg';
import componentsIcon from '../../assets/images/components-icon.svg';
import patternsIcon from '../../assets/images/pattrens-icon.svg';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
import { withNamespaces } from 'react-i18next';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
class Home extends Component {
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
      <div className="screen-hieght">
          <div className="bg-green container-fluid mt-0 text-white pt-3 pt-md-5 pb-5">
            <h4 className='mx-0 mx-md-3'> {t("homepage-titel")} </h4>
            <p className='mx-0 mx-md-3 mt-4'>{t("homepage-sub-titel")} </p>
          
            <div className="d-lg-flex d-md-flex mx-0 mx-md-3 mt-0 mt-md-5 ">
              <a dir='ltr' href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue home-page-btn" icon={<img className="mx-1 position-img" width='20' src={sketch} />}  text="Sketch"></Button></a>
              <a dir='ltr' href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mx-2 home-page-btn" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
            </div>
          </div>
          
          <div className='bg-white pt-3'>
        
          <div className="style-section">
            <div className="row">
              <div className="col-md-4 px-5 pb-4">
                <div className='row'>
                <div className='bg-circal'></div>
                <div className='col-md-2 styles-icon'>
                    <img src={stylesIcon} width="45" alt="styels icon" />
                </div>
                <div className='col-md-10'>
                  <h5 className='text-darkBlue'>{t("style-section-header")}</h5>
                  <p>{t("style-section-body")}</p>
                  <Link to="/styles">
                    <LinkGov text={t("style-section-body-link")} />
                  </Link>
                </div>
                </div>
              </div>
              <div className="col-md-4 px-5 pb-4">
                <div className='row'>
                <div className='bg-circal'></div>
                <div className='col-md-2 styles-icon'>
                    <img src={componentsIcon} width="40" alt="components Icon" />
                </div>
                <div className='col-md-10'>
                  <h5 className='text-darkBlue'>{t("components-section-header")}</h5>
                  <p>{t("components-section-body")}</p>
                  <Link to="/components">
                    <LinkGov text={t("components-section-body-link")} />
                  </Link>
                </div>
                </div>
              </div>
              <div className="col-md-4 px-5 pb-4">
                <div className='row'>
                <div className='bg-circal'></div>
                <div className='col-md-2 styles-icon'>
                    <img src={patternsIcon} width="35" alt="patterns Icon" />
                </div>
                <div className='col-md-10'>
                  <h5 className='text-darkBlue'>{t("patterns-section-header")}</h5>
                  <p>{t("patterns-section-body")}</p>
                  <Link to="/patterns">
                    <LinkGov text={t("patterns-section-body-link")}/>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="bg-gray-pastel mt-5 mb-5 p-5">
            <div className="row">
              <div className="col-md-6 pb-4">
                <h4 className='text-darkBlue'>{t("forDesigner-section-header")}</h4>
                <div className='col-md-10 px-0'>
                {t("forDesigner-section-body")}
                </div>
              
              </div>
              <div className="col-md-6 pb-4">
                <h4 className='text-darkBlue'>   {t("forDevelopers-section-header")}</h4>
                <div className='col-md-10 px-0'>
                {t("forDevelopers-section-body")}
                </div>
              
              </div>
            </div>
          </div>
          </div>
      </div>
    ]);
  }
}
export default withNamespaces()(Home);
//export default Home;