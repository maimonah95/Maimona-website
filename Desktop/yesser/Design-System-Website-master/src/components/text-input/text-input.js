
import React from 'react';
import { withNamespaces } from 'react-i18next';


function textinput ({ t }) {
    return (
        <div>
            <div className="col-md-6 mt-4">
                <label className="govsa-input__label" for=""> {t("accordion-lable")}</label>
                <input className="govsa-input" type="text" placeholder={t("input")}/>
            </div>
            <div className="col-md-6 mt-4">
                <label className="govsa-input__label govsa-input--error" for=""> {t("accordion-lable")}</label>
                <input className="govsa-input" type="text" placeholder={t("input")}/>
                <span className="govsa-errorMessage">{t("ErrorMessage")}</span>
            </div>
            <div className="col-md-6 mt-3">
                <label className="govsa-input__label govsa-input--disabled" for=""> {t("accordion-lable")}</label>
                <input className="govsa-input" type="text" placeholder={t("input")} disabled/>
            </div>
        </div>

    )
}

export default withNamespaces()(textinput);