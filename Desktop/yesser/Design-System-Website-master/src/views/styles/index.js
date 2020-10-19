// styles page
import React from 'react';
import { withNamespaces } from 'react-i18next';
import './index.scss';
import SideNavigation from '../../components/side-navigation';
import StyleHome from './styleHome';
import Typography from './typography';
import Colors from './colors';
import Layout from './layout';
import Iconography from './iconography';
import Images from './images';
import Spacing from './spacing';

class Styles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: this.props.name};
    }
    handleComponentSelection = (compLabel) =>{
        this.setState({
            component : compLabel
        });
    }
    renderSelectedComponent(){
        
        //console.log('selected comp ' + this.state.component)

        let toRender = null;
       // console.log('this.state.component :', this.state.component);
        var comp = this.state.component.toLocaleLowerCase().replace(/ /g, "");
        //console.log("toLower " + comp)
        
        if(comp == 'typography' || comp == 'نمطالحروف'){
            toRender = <Typography />
        }else if(comp == 'colors' || comp == 'الألوان') {
            toRender = <Colors />
        }else if(comp == 'layout' || comp == 'تخطيطالصفحة') {
            toRender = <Layout />
        }else if(comp == 'iconography' || comp == 'الايقونات') {
            toRender = <Iconography />
        }else if(comp == 'images'  || comp == 'الصور') {
            toRender = <Images />
        }else if(comp == 'spacing'  || comp == 'المسافات') {
            toRender = <Spacing />
        }else if (comp == 'overview'  || comp == 'نظرةعامة'){
            toRender = <StyleHome />
        }
        else{
            toRender = <StyleHome />
        }
        return toRender;
    }
   
    render(){
        const { t, i18n } = this.props;
        const toRender = this.renderSelectedComponent();
        const sideNavElements = [
            { label: t("overview"), href : '/styles' }, 
            { label: t("styles_typography_title"), href : '/styles/typography' }, 
            { label: t("colors"), href : '/styles/colors' }, 
            { label: t("layout"), href : '/styles/layout' }, 
            { label: t("iconography"), href : '/styles/iconography' }, 
            { label: t("images"), href : '/styles/images' }, 
            { label: t("spacing"), href : '/styles/spacing' }, 
        ]
        
        var activeItem = 0;
        sideNavElements.map((item, index) => {
            if(this.state.component.toLocaleLowerCase().replace(/ /g, "") === item.label.toLocaleLowerCase().replace(/ /g, "")){
                activeItem = index;
            }
        });
        
        return (
            [   
                <div className="screen-hieght">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/" title="title link">{t("Home")}</a></li>
                            <li class="breadcrumb-item active" aria-current="page"><a href="/styles">{t("styles")}</a>{this.state.component === '' ? "" : "  /  "+ this.state.component}</li>
                        </ol>
                    </nav>
                    <div className="d-lg-flex justify-content-start mx-md-3 mb-5">
                    <div className="col-lg-3 col-md-12 col-12 mb-3">
                        <SideNavigation elements={sideNavElements} activeItem={activeItem} data={this.handleComponentSelection.bind(this)} />
                    </div>
                    <div className="col-md-12 col-lg-9 col-12 px-3">
                        {toRender}
                        </div>
                    </div>
                </div>
            ]
        );
    }

}

export default withNamespaces()(Styles);
// export default Styles;

