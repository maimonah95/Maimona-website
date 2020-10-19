import React from 'react';
import { withNamespaces } from 'react-i18next';
import Mcit from'../assets/images/mcit-log.png'
function cards ({ t }) {
    return (
                <div className=" mt-5">
                    <div className="row my-3">
                        <div className="col-md-12">
                            <h6>{t("rules-reg-cards")}</h6>
                        </div>
                        <div className="col-md-12">
                            <p className="mb-2">{t("rules-reg-cards-p1")}</p>
                        </div>
                        <div className="col-md-12">
                            <p className="mb-1 font-weight-bold">{t("rules-reg-cards-differentElements")}</p>
                            <ul>
                                <li>{t("rules-reg-cards-differentElements1")}</li>
                                <li>{t("rules-reg-cards-differentElements2")}</li>
                                <li>{t("rules-reg-cards-differentElements3")}</li>
                                <li>{t("rules-reg-cards-differentElements4")}</li>
                                <li>{t("rules-reg-cards-differentElements5")}</li>
                            </ul>
                        </div>
                       
                        
                        <div className="col-md-4">
                            <div className="govsa-card card">
                                <div className="card-body">
                                    <h6 className="mb-4"> {t("rules-reg-cards-header")}</h6>
                                    <p className="body--2">    <p>{t("rules-reg-cards-body")}</p> </p>
                                </div>
                                <div className="govsa-card__footer">
                                    <div className="row no-gutters">
                                        <div className="col-5 text-white">
                                            <i className="p-3 govsa--download"></i>
                                        </div>
                                        <div className="col-7 govsa-card__tag">
                                            <p>{t("rules-reg-cards-tag")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row my-3 mt-4">
                        <div className="col-md-12">
                            <h6>{t("stratgy-init-cards")}</h6>
                        </div>
                        <div className="col-md-12">
                            <p className="mb-2">{t("stratgy-init-cards-p1")}</p>
                        </div>
                        <div className="col-md-12">
                            <p className="mb-1 font-weight-bold">{t("stratgy-init-cards-differentElements")}</p>
                            <ul>
                                <li>{t("stratgy-init-cards-differentElements1")}</li>
                                <li>{t("stratgy-init-cards-differentElements2")}</li>
                                <li>{t("stratgy-init-cards-differentElements3")}</li>
                                <li>{t("stratgy-init-cards-differentElements4")}</li>
                                <li>{t("stratgy-init-cards-differentElements5")}</li>
                            </ul>
                        </div>
                     
                        <div className="col-md-4">
                            <div className="govsa-card card">
                                <div className="card-body">
                                    <h6 className="mb-4">{t("stratgy-init-cards-header")}</h6>
                                    <p className="body--2">{t("stratgy-init-cards-body")} </p>
                                </div>
                                <div className="govsa-card__footer">
                                    <div className="row no-gutters">
                                        <div className="col-5 text-white px-2">
                                            Category icon
                                        </div>
                                        <div className="col-7 govsa-card__tag">
                                            <p>{t("stratgy-init-cards-tag")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row my-3 mt-4">
                        <div className="col-md-12">
                            <h6>{t("agency-cards")}</h6>
                        </div>
                        <div className="col-md-12">
                            <p className="mb-2">{t("agency-cards-p1")}</p>
                        </div>
                        <div className="col-md-12">
                            <p className="mb-1 font-weight-bold">{t("agency-cards-differentElements")}</p>
                            <ul>
                                <li>{t("agency-cards-differentElements1")}</li>
                                <li>{t("agency-cards-differentElements2")}</li>
                                <li>{t("agency-cards-differentElements3")}</li>
                                <li>{t("agency-cards-differentElements4")}</li>
                                <li>{t("agency-cards-differentElements5")}</li>
                            </ul>
                        </div>
            
                        <div className="col-md-4">
                            <div className="card govsa-card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-7">
                                            <h6>{t("agency-cards-header")}</h6>
                                        </div>
                                        <div className="col-5">
                                        <img src={Mcit} alt="styels icon" style={{width: "100%"}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="govsa-card__footer">
                                    <div className="row">
                                        <div className="font-weight-bold col-5 text-white">95
                                            <span className="px-1">{t("agency-cards-services")}</span>
                                        </div>
                                        <div className="col-7 govsa-card__tag">
                                        <p>{t("agency-cards-tag")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row my-3 mt-4">
                        <div className="col-md-12">
                            <h6>{t("services-cards")}</h6>
                        </div>
                        <div className="col-md-12">
                            <p className="mb-2">{t("services-cards-p1")}</p>
                        </div>
                        <div className="col-md-12">
                            <p className="mb-1 font-weight-bold">{t("services-cards-differentElements")}</p>
                            <ul>
                                <li>{t("services-cards-differentElements1")}</li>
                                <li>{t("services-cards-differentElements2")}</li>
                                <li>{t("services-cards-differentElements3")}</li>
                                <li>{t("services-cards-differentElements4")}</li>
                            </ul>
                        </div>
                      
                        <div className="col-md-4">
                            <div className="govsa-card card">
                                <div className="card-body">
                                    <h6 className="mb-4">{t("services-cards-header")}</h6>
                                    <p className="body--2">{t("services-cards-body")}</p>
                                </div>
                                <div className="govsa-card__footer">
                                    <div className="col-7 govsa-card__tag px-0">
                                        <p className="">{t("services-cards-tag")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

    )
}

export default withNamespaces()(cards);