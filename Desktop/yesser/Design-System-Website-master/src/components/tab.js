import React from 'react';
import { withNamespaces } from 'react-i18next';


function Tab ({ t }) {
    return (
        
        <div className="row mx-4 my-3">
            <ul className="nav nav-tabs govsa-tabs">
                <li className="nav-item govsa-tab--active">
                    <a className="nav-link " href="#">{t("input-li-2")}</a>
                    <div className="govsa-tabs--border"></div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{t("accordion-lable")}</a>
                    <div className="govsa-tabs--border"></div>
                </li>
            </ul>
        </div>
    )
}

export default withNamespaces()(Tab);