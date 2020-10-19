// styles page
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from '../../components/side-navigation';
import AboutHome from './aboutHome';
import UpdatesandReleases from './updatesandReleases';
import ForDevelopers from './forDevelopers';
import ForDesigners from './forDesigners';
import DesignPrinciples from './designPrinciples';
import { withNamespaces } from 'react-i18next';
      

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: this.props.name };
      }
    
      handleComponentSelection = (compLabel) =>{
          this.setState({
            component : compLabel
          });
      }

      renderSelectedComponent(){
        let toRender = null;
        //console.log('selected comp ' + this.state.component)
        const comp = this.state.component.toLocaleLowerCase().replace(/ /g, "");
        //console.log("toLower " + comp)
        
        if(comp == 'updatesandreleases' || comp == 'التحديثاتوالإصدارات'){
            toRender = <UpdatesandReleases />
        }else if(comp == 'fordevelopers' || comp == 'للمطورين') {
            toRender = <ForDevelopers />
        }else if(comp == 'fordesigners' || comp == 'للمصممين') {
            toRender = <ForDesigners />
        }else if(comp == 'designprinciples' || comp == 'مبادئالتصميم') {
            toRender = <DesignPrinciples />
        }else if (comp == 'overview'  || comp == 'نظرةعامة'){
            toRender = <AboutHome />
        }else{
            toRender = <AboutHome />
        }
        return toRender;
    }

    render() {
        const { t, i18n } = this.props;
        const toRender = this.renderSelectedComponent()
        const sideNavElements = [
            { label: t("overview"), href: '/about' },
            { label:  t("DesignPrinciples"), href: '/about/designprinciples' },
            {
                label: t("Documentation"),
                subMenu: [
                    { label:  t("ForDevelopers"), href: '/about/fordevelopers' },
                    { label:  t("ForDesigners"), href: '/about/fordesigners' },
                ]
            },
            { label:  t("UpdatesAndReleases"), href: '/about/updatesandreleases' },
            
        ]
        
        var activeItem = 0;
        sideNavElements.map((item, index) => {
            if(item.subMenu){
                item.subMenu.map((subMenu, index) => {
                    if(this.state.component.toLocaleLowerCase().replace(/ /g, "") === subMenu.label.toLocaleLowerCase().replace(/ /g, "")){
                        activeItem = '2'+index;
                    }
                })
            }else{
                if(this.state.component.toLocaleLowerCase().replace(/ /g, "") === item.label.toLocaleLowerCase().replace(/ /g, "")){
                    activeItem = index;
                }
            }
           
        });

        return (
            [
                <div className="screen-hieght">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/" title="title link">{t("Home")}</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><a href="/about">{t("aboutUs")}</a>{this.state.component === '' ? "" : "  /  "+ this.state.component}</li>
                        </ol>
                    </nav>

                    <div className="d-lg-flex justify-content-start mx-md-3 mb-5">
                        <div className="col-lg-3 col-md-12 col-12 mb-3">
                            <SideNavigation elements={sideNavElements} activeItem={activeItem} data={this.handleComponentSelection.bind(this)} />
                        </div>
                        <div className="col-md-12 col-lg-9 col-12 px-3">
                            {/* <h3>About Design.GOV.SA</h3>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p> */}
                            {toRender}
                        </div>
                    </div>
                </div>
            ]
        );
    }

}


export default withNamespaces()(About);

