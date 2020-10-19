import React, { Component } from 'react';
import DesignPrinciple from '../../assets/images/img_design_principle.png'
import { withNamespaces } from 'react-i18next';
class DesignPrinciples extends Component {
    render() {
        const { t, i18n } = this.props;

        return(
            <div className='bg-white border-radius p-4'>
                    <div className="col-md-3">
                        <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("DesignPrinciples")}</h3>  
                    </div>
                    <img className="img-width" src={DesignPrinciple} align="middle" alt="" width="100%"/>
             <div> 
    
                  <p className="mt-4">{t("Design_Principles_desc-1")}</p>
                  <p>{t("Design_Principles_desc-2")}</p>
                  <h4 className="text-darkBlue mt-4">{t("Inclusive")}</h4>
                  <p className="">{t("Inclusive_desc")}</p>
                  <h4 className="text-darkBlue mt-4">{t("Modular")}</h4>
                  <p className="">{t("Modular_desc")}</p>
                  <h4 className="text-darkBlue mt-4">{t("Empathy")}</h4>
                  <p className="">{t("Empathy_desc")}</p>
                  <h4 className="text-darkBlue mt-4">{t("Consistency")}</h4>
                  <p className="">{t("Consistency_desc")}</p>
             </div>
                    
            </div>   
        )
    }

}
export default withNamespaces()(DesignPrinciples);