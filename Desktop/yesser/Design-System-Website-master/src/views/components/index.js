// styles page
import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

import CompHome from './compHome';
import Tables from './tables';
import Accordion from './accordion';
import Tags from './tags';
import Alert from './alert';
import Dropdown from './dropdown';
import Links from './links';
import InputText from './inputText';
import Buttons from './buttons';
import FileUploads from './fileUploads';
import Checkboxes from './checkboxes';
import Radio from'./radio';
import Search from './search';
import Card from './card';
import Header from './header';
import Footer from './footer';
import Tab from './tab'
import Pagination from './pagination'
import Breadcrumbs from './Breadcrumbs'
import ThankYouPage from './thankYouPage'
import SideNavigation from '../components/sideNavigation';
import Navigation from '../../components/side-navigation';


class Components extends React.Component {
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
    const comp = this.state.component.toLocaleLowerCase().replace(/ /g, "");
    if(comp=== 'tables' || comp=== 'جداولالبيانات'){
      toRender = <Tables />
    }else if(comp=== 'accordion' || comp=== 'تنسيقالطيّ') {
      toRender = <Accordion />
    }else if(comp=== 'tags' || comp=== 'العلامات') {
      toRender = <Tags />
    }else if(comp=== 'alert' || comp=== 'التنبيه') {
      toRender = <Alert />
    }else if(comp=== 'dropdown' || comp=== 'القائمةالمنسدلة') {
      toRender = <Dropdown />
    }else if(comp=== 'link' || comp=== 'الروابط') {
      toRender = <Links />
    }else if(comp=== 'inputtext' || comp=== 'إدخالالنص') {
      toRender = <InputText />
    }else if(comp=== 'buttons' || comp=== 'الأزرار') {
      toRender = <Buttons />
    }else if(comp=== 'fileupload' || comp=== 'تحميلالملفات') {
      toRender = <FileUploads />
    }else if(comp=== 'checkbox' || comp=== 'خاناتالاختيار') {
      toRender = <Checkboxes />
    }else if (comp=== 'radio'  || comp=== 'زرالاختيار'){
      toRender = <Radio />
    }else if(comp=== 'search' || comp=== 'البحث') {
      toRender = <Search />
    }else if(comp=== 'cards' || comp=== 'البطاقات') {
      toRender = <Card />
    }else if(comp=== 'header' || comp=== 'رأسلصفحة') {
      toRender = <Header />
    }else if(comp=== 'footer' || comp=== 'تذييلالصفحة') {
      toRender = <Footer />
    }else if(comp=== 'sidenavigation' || comp=== 'خياراتجانبية') {
      toRender = <SideNavigation />
    }else if (comp=== 'tab'  || comp=== 'علامةالتبويب'){
      toRender = <Tab />
    }else if (comp=== 'pagination'  || comp=== 'ترقيمالصفحات'){
      toRender = <Pagination />
    }else if (comp=== 'breadcrumbs'  || comp=== 'مساراتالتنقل'){
      toRender = <Breadcrumbs />
    }else if (comp=== 'thankyoupage'  || comp=== 'صفحةالشكر'){
    toRender = <ThankYouPage />}
    else if (comp=== 'overview'  || comp=== 'نظرةعامة'){
      toRender = <CompHome />
    }else{
      toRender = <CompHome />
    }
    return toRender;
  }
  render() {
    const { t, i18n } = this.props;
    const toRender = this.renderSelectedComponent()
    const sideNavElements = [
      { label: t("overview"), href: '/components' }, 
      { label: t("accordion"), href: '/components/accordion'}, 
      { label: t("alert"), href: '/components/alert'}, 
      { label: t("button"), href: '/components/buttons' },
      { label: t("breadcrumb"), href: '/components/breadcrumbs' }, 
      { label: t("cards"), href: '/components/card'}, 
      { label: t("checkbox"), href: '/components/checkboxes' },  
      { label: t("components_dropdown"), href: '/components/dropdown' },
      { label: t("components_fileupload"), href: '/components/fileuploads'},
      { label: t("components_footer"), href: '/components/footer'},  
      { label: t("components_header"), href: '/components/header'},
      { label: t("input"), href: '/components/inputtext' },
      { label: t("link"), href: '/components/links'},
      { label: t("components_Pagination"), href: '/components/pagination'},
      // { label: 'Buttons', href: '#' ,label: 'Links'},
      { label: t("components_radio"), href: '/components/radio' },  
      { label: t("components_search"), href: '/components/search'},
      { label: t("components_sideNavigation"), href: '/components/sideNavigation'},
      { label: t("components_table"), href: "/components/tables"},
      { label: t("components_tag"), href: '/components/tags' },
      { label: t("components_Tab"), href: '/components/tab' },  
      { label: t("components_thankYouPage"), href: '/components/thankYouPage' }
    ]

    var activeItem = 0;
    sideNavElements.map((item, index) => {
        if(this.state.component.toLocaleLowerCase().replace(/ /g, "") === item.label.toLocaleLowerCase().replace(/ /g, "")){
            activeItem = index;
        }
    });

    return (
      [
        <div>
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" title="title link">{t("Home")}</a></li>
                  <li class="breadcrumb-item active" aria-current="page"><a href="/components">{t("components")}</a>{this.state.component === '' ? "" : "  /  "+ this.state.component}</li>
              </ol>
          </nav>
          <div className="d-lg-flex justify-content-start mx-md-3 mb-5">
            <div className="col-lg-3 col-md-12 col-12 mb-3">
              <Navigation elements={sideNavElements} activeItem={activeItem} data={this.handleComponentSelection.bind(this)} />
            </div>
            <div className="col-md-12 col-lg-9 col-12 px-3 ">
              {toRender}
            </div>
          </div>
        </div>
      ]
    );
  }

}

export default withNamespaces()(Components);
// export default Components;

