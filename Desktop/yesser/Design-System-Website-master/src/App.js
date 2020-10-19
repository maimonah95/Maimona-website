import React , {useState} from 'react';
import './App.scss';
import Header from './components/header'
import Home from './views/homepage';
import Styles from './views/styles/index';
import NotFoundPage from './views/notFoundPage'
import Components from './views/components/index';
import Patterns from './views/patterns/index';
import About from './views/about/index';
import 'govsa-ds';
import { Route, Switch } from 'react-router-dom';
import Footer from "./components/footer";
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';


var dirction ;
if(i18n.language == 'ar'){
  dirction='rtl';
}else{
  dirction='ltr';
}
var language = 'en';
function App ({ t }) {

 const changeLanguage = () => {
   if (i18n.language !== 'ar') {
      i18n.changeLanguage("ar");
      language = "ar";
      dirction = "rtl";
      document.documentElement.lang = "ar";   
   } else {
     i18n.changeLanguage("en");
     language = "en";
     dirction = "ltr";
     document.documentElement.lang = "en";
   }
   window.location.reload();
 };
  return (
    <main dir={dirction} lang={language}>
        <div className="d-flex justify-content-between px-3">
        <div>
          <a href="#" className="govsa-link" onClick={changeLanguage}>
          {t('site-lang')}
          </a>{" "}
      
        </div>
      </div>
      <Header />
      
      <Switch>
        <Route exact path="/" render={() => <Home name=""/>} />
        
        <Route exact path="/styles" render={() => <Styles name=""/>} />
        <Route exact path="/styles/typography" render={() => <Styles name={t("styles_typography_title")} />} />
        <Route path="/styles/colors" render={() => <Styles name={t("colors")} />} />
        <Route path="/styles/layout" render={() => <Styles name={t("layout")} />} />
        <Route path="/styles/iconography" render={() => <Styles name={t("iconography")} />} />
        <Route path="/styles/images" render={() => <Styles name={t("images")} />} /> 
        <Route path="/styles/spacing" render={() => <Styles name={t("spacing")} />} />

        <Route exact path="/components" render={() => <Components name=""/>} />
        <Route path="/components/tables" render={() => <Components name={t("components_table")}/>} />
        <Route path="/components/accordion" render={() => <Components name={t("accordion")}/>} />
        <Route path="/components/tags" render={() => <Components name={t("components_tag")}/>} />
        <Route path="/components/alert" render={() => <Components name={t("alert")}/>} />
        <Route path="/components/links" render={() => <Components name={t("link")}/>} />
        <Route path="/components/pagination" render={() => <Components name={t("components_Pagination")}/>} />
        <Route path="/components/dropdown" render={() => <Components name={t("components_dropdown")}/>} />
        <Route path="/components/inputText" render={() => <Components name={t("input")}/>} />
        <Route path="/components/buttons" render={() => <Components name={t("button")}/>} />
        <Route path="/components/fileUploads" render={() => <Components name={t("components_fileupload")}/>} />
        <Route path="/components/checkboxes" render={() => <Components name={t("checkbox")}/>} />
        <Route path="/components/search" render={() => <Components name={t("components_search")}/>} />
        <Route path="/components/radio" render={() => <Components name={t("components_radio")}/>} />
        <Route path="/components/card" render={() => <Components name={t("cards")}/>} />
        <Route path="/components/header" render={() => <Components name={t("components_header")}/>} />
        <Route path="/components/footer" render={() => <Components name={t("components_footer")}/>} />
        <Route path="/components/tab" render={() => <Components name={t("components_Tab")}/>} />
        <Route path="/components/sideNavigation" render={() => <Components name={t("components_sideNavigation")}/>} />
        <Route path="/components/breadcrumbs" render={() => <Components name={t("breadcrumb")}/>} />
        <Route path="/components/thankYouPage" render={() => <Components name={t("components_thankYouPage")}/>} />

        <Route exact path="/patterns" render={() => <Patterns name=""/>} />
        <Route path="/patterns/Pattern" render={() => <Patterns name={t("patterns")}/>} />
        
        <Route exact path="/about" render={() => <About name=""/>} />
        <Route path="/about/updatesandReleases" render={() => <About name= {t("UpdatesAndReleases")}/>} />
        <Route path="/about/forDevelopers" render={() => <About name={t("ForDevelopers")}/>} />
        <Route path="/about/forDesigners" render={() => <About name={t("ForDesigners")}/>} />
        <Route path="/about/accessibility" render={() => <About name="accessibility"/>} />
        <Route path="/about/codeGuidelines" render={() => <About name="codeGuidelines"/>} />
        <Route path="/about/designPrinciples" render={() => <About name={t("DesignPrinciples")}/>} />
        <Route path="/about/tutorials" render={() => <About name="tutorials"/>} />
        <Route path="*" component={NotFoundPage} />
      </Switch>

      <Footer />
    </main>
  );
}
export default withNamespaces()(App);
// export default App;
