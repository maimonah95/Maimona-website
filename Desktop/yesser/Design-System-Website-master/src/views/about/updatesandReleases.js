
import React, { Component } from 'react';
import UpdateRelease from '../../assets/images/img_update_release.png'
import { withNamespaces } from 'react-i18next';
class UpdatesAndReleases extends Component {
    render(){
        const { t, i18n } = this.props;

        return(
            <div className='bg-white border-radius p-4'>
                <div className='row'>
                    <div className="col-md-4">
                        <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("UpdatesAndReleases")}</h3>
                    </div>
                    <img className="img-width px-3" src={UpdateRelease} align="middle" alt="" width="100%"/>
                </div>
                
                <p class="mt-5">{t("Updates_Releases-desc1")}</p>
                <p className="" >{t("UpdatesAndReleases-suggestions")}<a href="https://github.com/GOV-SA/design-system-gov.sa/issues" className="govsa-link"> GitHub </a>.</p>

                <h5 className="mt-4 text-darkBlue">{t("UpdatesAndReleases-desing")} V1.0.0</h5>
                {/* <p className="mb-1">{t("UpdatesAndReleases-desing-desc")} </p> */}
  
                <h5 className="mt-4 text-darkBlue">{t("UpdatesAndReleases-Develope")} V1.0.0</h5>
                {/* <p className="">{t("UpdatesAndReleases-Developpe-desc")}</p> */}
                
            </div>   
        )
    }
}

export default  withNamespaces()(UpdatesAndReleases);