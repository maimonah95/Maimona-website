
import React from 'react';
import { withNamespaces } from 'react-i18next';


function dropdown ({ t }) {
    return (
   
         
        <div className="col-md-4 mt-4">
            <div className="dropdown govsa-dropdown">
                <button className="dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    {t("accordion-lable")}
                    <i className="govsa-icon govsa--arrowdown"></i>
                </button>
                <div className="dropdown-menu">
                    <a className="govsa-dropdown__item" href="#" title="item 1">  {t("components_dropdown-lable")}</a>
                    <a className="govsa-dropdown__item" href="#" title="item 2">  {t("components_dropdown-lable")}</a>
                    <a className="govsa-dropdown__item" href="#" title="item 3">  {t("components_dropdown-lable")}</a>
                </div>
            </div>
        </div>


    )
}

export default withNamespaces()(dropdown);