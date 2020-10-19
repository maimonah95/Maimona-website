
import React from 'react';
import { withNamespaces } from 'react-i18next';


function textinput ({ t }) {
    return (
   
        <div class="col-md-2 mt-4">
            <label class="govsa-checkbox">{t("accordion-lable")}
                <input type="checkbox"/>
                <span class="govsa-checkbox__checkmark"></span>
            </label>
        </div>


    )
}

export default withNamespaces()(textinput);