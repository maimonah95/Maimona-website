import React, { Component } from 'react';

import 'govsa-ds';
import { withNamespaces } from 'react-i18next';

class notFoundPage extends Component {
    render() {
        const { t, i18n } = this.props;

        return(
            <div className="bg-white p-5 m-5 rounded">
                <h4> {t("Not-found-page")}</h4>
            </div>
        )

    }

}
export default withNamespaces()(notFoundPage);
