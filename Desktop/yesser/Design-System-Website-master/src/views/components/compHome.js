import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../../components/buttons/index';
import '../styles/index.scss';
import './index.scss';
import github from '../../assets/images/github-2.png';
import sketch from '../../assets/images/sketch-2.png'
class CompHome extends Component {
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
        return([
            <div className='bg-white border-radius p-4'>
                <div className='row border-bottom'>
                    <div className="col-md-2">
                        <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("components")}</h3>
                    </div>
                    <div className='col-md-10' dir="ltr">
                    <a href="https://github.com/GOV-SA/Design-system-prototype" target="_blank"><Button className="btn govsa-btn--outline--darkBlue mt-0 mt-md-3 mb-3 float-l"  text="Sketch" icon={<img className="mx-1 position-img" width='20' src={sketch} />}></Button></a>
                    <a href="https://github.com/GOV-SA/design-system-gov.sa" target="_blank"><Button className="btn govsa-btn--darkBlue mt-0 mt-md-3 mb-3 mx-2 float-l" text={t("github-button")} icon={<img className="mx-1 position-img" width='20' src={github} />}></Button></a>
                </div>
                    </div>
                <p class="mt-4">{t("components-section-body")}</p>
                <p class="mt-4">{t("styles_overview_desc1")}<Link className="govsa-link" to="/about/fordevelopers">{t("styles_overview_desc2")}</Link>{t("styles_overview_desc3")}</p>
            </div>
        ])
    }
}
          
export default withNamespaces()(CompHome);