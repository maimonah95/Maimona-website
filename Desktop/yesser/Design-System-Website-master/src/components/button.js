
import React from 'react';
import { withNamespaces } from 'react-i18next';


function button ({ t }) {
    return (

        <div class="row mt-3 mb-3">
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--darkBlue">{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--darkBlue" disabled button-lable>{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--green">{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--green" disabled  button-lable>{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--blue">{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--blue" disabled >{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--outline--darkBlue">{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--outline--darkBlue" disabled button-lable>{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--outline--green">{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--outline--green" disabled button-lable>{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--outline--blue">{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--outline--blue" disabled button-lable>{t("button-lable")}</button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--green">{t("button-lable")} <i class="govsa--external"></i></button>
            </div>
            <div class="mt-3 col-md-2">
                <button type="button" class="btn govsa-btn--green" disabled button-lable>{t("button-lable")} <i class="govsa--external"></i></button>
            </div>
    </div>
  

    )
}

export default withNamespaces()(button);