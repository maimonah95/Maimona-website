import React, { Component } from 'react';
import Design from '../../assets/images/img_design.png';
import Design1 from '../../assets/images/Bitmap1.jpg';
import Design2 from '../../assets/images/Bitmap2.png';
import Design3 from '../../assets/images/Bitmap3.png';
import Design4 from '../../assets/images/Bitmap4.png';
import { withNamespaces } from 'react-i18next';
class ForDesigners extends Component {
    render(){
        const { t, i18n } = this.props;

        return(
            <div className='bg-white border-radius p-4'>
                    <div className="col-md-3">
                        <h3 className='mt-0 mt-md-3 text-darkBlue pb-0 pb-md-3'>{t("ForDesigners")}</h3>
                    </div>

                    <img className="img-width" src={Design} align="middle" alt="" width="100%"/>
                  
                      <div>

                    <p className="mt-4 border-bottom pb-5">{t("Design_desc")}</p>
                    <h4 className="text-darkBlue mt-4">{t("Anatomy")}</h4>
                    <h4 className="text-darkBlue mt-4">{t("Grid")}</h4>
                    <p>{t("Grid_desc-1")}</p>
                    <p className="font-weight-bold mb-1" >{t("Grid_desc-2")}</p>
                    <p>{t("Grid_desc-3")}</p>
                    <p>{t("Grid_desc-4")}</p>
                    <p>{t("Grid_desc-5")}</p>
                    <p>{t("Grid_desc-6")}</p>
                    <p  className="font-weight-bold mb-1">{t("Grid_desc-7")}</p>
                    <p className="mb-1">{t("Grid_desc-8")}</p>
                    <p className="mb-1">{t("Grid_desc-9")}</p>
                    <p className="mb-1">{t("Grid_desc-10")}</p>
                    <p className="mb-1">{t("Grid_desc-11")}</p>
                    <p className="mb-5">{t("Grid_desc-12")}</p>
                    
                             
                      <div>
                    <img className="img-width" src={Design1} align="middle" alt="" width="100%"/>
                      </div>
                    <p className="mt-4">{t("Grid_desc-13")}</p>
                    <p>{t("Grid_desc-14")}</p> 
                    <p>{t("Grid_desc-15")}</p>
                    <p className="font-weight-bold mb-1">{t("Grid_desc-16")}</p> 
                    <p className="mb-1">{t("Grid_desc-17")}</p> 
                    <p className="mb-1">{t("Grid_desc-18")}</p> 
                    <p className="mb-1">{t("Grid_desc-19")}</p> 
                    <p className="mb-1">{t("Grid_desc-20")}</p> 
                    <p className="mb-5" >{t("Grid_desc-21")}</p> 

                      <div>
                    <img className="img-width" src={Design2} align="middle" alt="" width="100%"/>
                      </div>

                    <p className="mt-4">{t("Grid_desc-22")}</p> 
                    <h4 className="text-darkBlue mt-4">{t("Visual_Pattern")}</h4>
                    <p>{t("Visual_Pattern_desc-1")}</p> 
                    <p>{t("Visual_Pattern_desc-2")}</p> 
                    <p>{t("Visual_Pattern_desc-3")}</p> 
                    <p>{t("Visual_Pattern_desc-4")}</p> 
                              

                      <div>
                    <img className="img-width" src={Design3} align="middle" alt="" width="100%"/>
                     </div>

                    <p className="mt-4">{t("Visual_Pattern_desc-5")}</p> 
                    <h4 className="text-darkBlue mt-4">{t("Components")}</h4>
                    <p>{t("Components_desc-1")}</p> 

                      <div>
                    <img className="img-width" src={Design4} align="middle" alt="" width="100%"/>
                      </div>
                              
                    <p className="mt-4">{t("Components_desc-2")}</p>
                    <h4 className="text-darkBlue mt-4">{t("Info")}</h4>
                    <p>{t("Info_desc")}<a href="https://www.sketch.com/docs/" className="govsa-link">{t("ForDesigners_dependencies-2")}</a>.</p>
                    <h4 className="text-darkBlue mt-4">{t("Updates")}</h4> 
                    <p>{t("Updates_desc-1")}</p> 
                    <p>{t("Updates_desc-2")}</p> 
                    {/* <h4 className="text-darkBlue mt-4">{t("Support")}</h4> 
                    <p>{t("Support_desc")}<a href="https://github.com" className="govsa-link">{t("ForDesigners_dependencies-1")}</a>.</p>  */}
                    </div>
             
            </div>   
        )
    }
}

export default  withNamespaces()(ForDesigners);