// styles page
import React from 'react';
import { withNamespaces } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import SideNavigation from '../../components/side-navigation';
import Pattern from './pattern';
import PatternsHome from './patternsHome';


class Patterns extends React.Component {
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
        
        if(comp == 'patterns' || comp == 'أنماطالتصميم'){
            toRender = <Pattern />
        }else if (comp == 'overview'  || comp == 'نظرةعامة'){
            toRender = <PatternsHome />
        }else{
            toRender = <PatternsHome />
        }
        return toRender;
    }

    render() {
        const { t, i18n } = this.props;
        const toRender = this.renderSelectedComponent();
        const sideNavElements = [
            { label: t("overview"), href: '/patterns' },
            { label: t("patterns"), href: '/patterns/pattern' },
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
                            <li class="breadcrumb-item active" aria-current="page"><a href="/patterns">{t("patterns")}</a>{this.state.component === '' ? "" : "  /  "+ this.state.component}</li>
                        </ol>
                    </nav>
                    <div className="d-lg-flex justify-content-start mx-3 mb-5 border-radius">
                        <div className="col-lg-3 col-md-12 col-12 mb-3">
                            {/* <SideNavigation elements={sideNavElements} /> */}
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

export default withNamespaces()(Patterns);
// export default Patterns;

