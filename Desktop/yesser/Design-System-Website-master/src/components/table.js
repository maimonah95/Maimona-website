import React from 'react';
import { withNamespaces } from 'react-i18next';


function table ({ t }) {
    return (
      <div>
        <div className="govsa-table">
            <table className="table">
                <thead>
                    <tr>
                    <th>{t("table-column-title")} </th>
                    <th>{t("table-column-title")} </th>
                    <th>{t("table-column-title")} </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                </tr>
                <tr>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                </tr>
                <tr>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                </tr>
                <tr>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                </tr>
                <tr>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                </tr>
                <tr>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                </tr>
                <tr>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                <td>{t("table-line-content")}</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div className="govsa-table">
            <table className="table">
            <thead>
                <tr>
                <th>
                    <label className="govsa-checkbox">
                    {t("table-column-title")}
                    <input type="checkbox" />
                    <span className="govsa-checkbox__checkmark"></span>
                    </label>
                </th>

                <th>{t("table-column-title")} </th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <div>
                    <label className="govsa-checkbox">
                        
                        <input type="checkbox" />
                        <span className="govsa-checkbox__checkmark"></span>
                    </label>
                    </div>
                </td>
                <td>{t("table-line-content")} </td>
                <td>
                    <i className="govsa--delete pull-right"></i>
                    <i class="govsa--edit mx-4"></i>
                </td>
                </tr>
                <tr>
                <td>
                    <div>
                    <label className="govsa-checkbox">
                      
                        <input type="checkbox" />
                        <span className="govsa-checkbox__checkmark"></span>
                    </label>
                    </div>
                </td>
                <td>{t("table-line-content")} </td>

                <td>
                    <i className="govsa--delete pull-right"></i>
                    <i class="govsa--edit mx-4"></i>
                </td>
                </tr>
                <tr>
                <td>
                    <div>
                    <label className="govsa-checkbox">
                      
                        <input type="checkbox" />
                        <span className="govsa-checkbox__checkmark"></span>
                    </label>
                    </div>
                </td>
                <td>{t("table-line-content")} </td>

                <td>
                    <i className="govsa--delete pull-right"></i>
                    <i class="govsa--edit mx-4"></i>
                </td>
                </tr>
                <tr>
                <td>
                    <div>
                    <label className="govsa-checkbox">
                       
                        <input type="checkbox" />
                        <span className="govsa-checkbox__checkmark"></span>
                    </label>
                    </div>
                </td>
                <td>{t("table-line-content")} </td>

                <td>
                    <i className="govsa--delete pull-right"></i>
                    <i class="govsa--edit mx-4"></i>
                </td>
                </tr>
            </tbody>
            </table>
        </div>

      </div>
    );
}

export default withNamespaces()(table);