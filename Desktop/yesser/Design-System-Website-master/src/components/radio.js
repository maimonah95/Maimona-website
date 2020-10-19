import React from 'react';
import { withNamespaces } from 'react-i18next';


function Radio ({ t }) {
    return (
        
        <div class="col-md-2 mt-4">
            <label class="govsa-radio">{t("accordion-lable")}
                <input type="radio" class="govsa-input-checkbox"/>
                <span class="govsa-radio__checkmark"></span>
            </label>
        </div>
    )
}

export default withNamespaces()(Radio);