import React, { Component } from 'react';
import DesignOverview from '../../assets/images/img_overview.png'
import { withNamespaces } from 'react-i18next';
class AboutHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            htmlContent: '',
        }
    }
    render() {
        const { t, i18n } = this.props;

        return( 
            <div className='bg-white border-radius p-4'>
                    <div className="col-md-3">
                        <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("overview")}</h3>
                    </div> 
                    <img className="img-width" src={DesignOverview} align="middle" alt="" width="100%"/>
                    <div>
                       <p class= "mt-4">{t("AboutUS_desc1")}</p>
                       <p>{t("AboutUS_desc2")}</p>
                    </div>
               
            
         </div>
        )
    }

}
export default withNamespaces()(AboutHome);