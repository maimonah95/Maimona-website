
import React ,{ Fragment }from 'react';
import { withNamespaces } from 'react-i18next';


function accordion ({ t }) {
    return (
        <div className="row">
            <div className="col-md-4 mt-3 mt-md-0">
                <div className="accordion govsa-accordion" id="accordionExample">
                    <div className="card">
                        <button className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {t("accordion-lable")} <i className=" govsa-icon govsa--Color"></i>
                        </button>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample" >
                            <div className="card-body">
                            {t("dummy-data")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4 mt-3 mt-md-0">
                <div className="accordion govsa-accordion" id="accordionExample2">
                    <div className="card">
                        <button className="card-header" id="heading2" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        {t("accordion-lable")} <i className=" govsa-icon govsa--Color"></i>
                        </button>
                        <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionExample2" >
                            <div className="card-body">
                            {t("dummy-data")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <button className="card-header" id="heading3" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        {t("accordion-lable")} <i className=" govsa-icon govsa--Color"></i>
                        </button>
                        <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionExample2" >
                            <div className="card-body">
                            {t("dummy-data")}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <button className="card-header" id="heading4" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        {t("accordion-lable")} <i className=" govsa-icon govsa--Color"></i>
                        </button>
                        <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionExample2" >
                            <div className="card-body">
                            {t("dummy-data")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withNamespaces()(accordion);