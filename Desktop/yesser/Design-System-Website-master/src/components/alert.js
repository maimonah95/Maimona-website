
import React from 'react';

import warningImg from "../assets/images/warning.svg";
import successImg from "../assets/images/success.svg";
import dangerImg from "../assets/images/error.svg";
import infoImg from "../assets/images/info-blue.svg";
import { withNamespaces } from 'react-i18next';


function alert ({ t }) {
    return (
        <div className=" px-4">
            <div className="alert govsa-alert--success" role="alert">
                <h6>
                    <img src={successImg}  />   {t("alert-success")}
                </h6>
                <p>
                {t("alert-body")}
                </p>
            </div>
            <div class="alert govsa-alert--info" role="alert">
                <h6>
                    <img src={infoImg}  />  {t("alert-info")}
                </h6>
                <p>
                {t("alert-body")}
                </p>
            </div>
            <div className="alert govsa-alert--warning" role="alert">
                <h6>
                    <img src={warningImg}  />   {t("alert-warning")}
                </h6>
                <p>
                {t("alert-body")}
                </p>
            </div>
            <div class="alert govsa-alert--danger" role="alert">
                <h6>
                    <img src={dangerImg}  />  {t("alert-danger")} 
                </h6>
                <p>
                {t("alert-body")}
                </p>
            </div>
        </div>

    )
}

export default withNamespaces()(alert);