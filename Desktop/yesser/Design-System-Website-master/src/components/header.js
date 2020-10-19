import React, {Component} from 'react';
import Logo from '../assets/images/logo-govsa.svg';
import VisionLogo from "../assets/images/vision-2030-white.svg";
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import searchList from '../utils/searchList';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredItem: [],
        }
    } 

    componentWillMount() { document.addEventListener("click", this.handleClickOutside, false); }
  
    handleClickOutside =(e) =>{
       this.setState({
        filteredItem: [],
       })
        var inputvalue = document.getElementsByClassName("govsa-input govsa-header__search__input")[0];
        inputvalue.value=""
        if ( document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr") {
        inputvalue.style.borderBottomLeftRadius= "8px";
        inputvalue.nextElementSibling.children[0].style.borderBottomRightRadius= "8px";
        } else {
        inputvalue.style.borderBottomRightRadius= "8px";
        inputvalue.nextElementSibling.children[0].style.borderBottomLeftRadius= "8px";
        }
        return;
    }

    onChangeSearchHeader = (event) => {
        if(event.target.value.length > 0){
           if(document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr" ){
            const temp_filteredItem = searchList.filter(item => {
                return (
                   item.title.toLowerCase().includes(event.target.value.toLowerCase().trim()) 
                );
            });
            this.setState({
                filteredItem: temp_filteredItem,
            })
           }else{
            const temp_filteredItem = searchList.filter(item => {
                return (
                    item.titlear=== undefined? null :item.titlear.includes(event.target.value.trim())
                );
            });
            this.setState({
                filteredItem: temp_filteredItem,
            })

           }
        }else{
            this.setState({
                filteredItem: []
            })
        }
     }

     searchHeader = () => {
        var input = document.getElementsByClassName("govsa-input govsa-header__search__input");
        
        for (var i = 0; i < input.length; i++) {
            input[i].addEventListener("input", function() {
                var buttons2 = document.getElementsByClassName("govsa-input govsa-header__search__input");
                for (var i = 0; i < buttons2.length; i++) {
                    if(this.value === ""){
                        if ( document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr") {
                           this.style.borderBottomLeftRadius= "8px";
                           this.nextElementSibling.children[i].style.borderBottomRightRadius= "8px";
                        } else {
                            this.style.borderBottomRightRadius= "8px";
                            this.nextElementSibling.children[i].style.borderBottomLeftRadius= "8px";                        }
                    
                    }else{
                        if (document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr") {
                            this.style.borderBottomLeftRadius= "0px";
                            this.nextElementSibling.children[i].style.borderBottomRightRadius= "0px";
                        } else {
                            this.style.borderBottomRightRadius= "0px";
                            this.nextElementSibling.children[i].style.borderBottomLeftRadius= "0px";
                        }
                    }
                }
            });
        }
        

     }

    render() {
        const { t, i18n } = this.props;
    return (
      <header className="govsa-header">
        <nav className="navbar navbar-expand-lg govsa-header__open-search"> 
            <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="govsa--menu text-white"></i>
            </button>
            <Link to="/"  className="govsa-logo"><img src={Logo} width="136" alt="" /></Link>
            <div  ref={node => this.submitPopoverRef = node} className="col-md-3 col-4 order-lg-2 order-md-1 order-1 p-0">
                <div className="input-group govsa-search--header">
                    <input type="text" className="govsa-input govsa-header__search__input" onChange={(e) => this.onChangeSearchHeader(e)} placeholder={t("search")} onClick={this.searchHeader}/>
                    <div className="input-group-append">
                        <button disabled className="govsa-header__search__button mx-0" type="button"><i className="website-zoom govsa--zoom"></i></button>
                    </div> 
                </div>
                {this.state.filteredItem.length > 0 &&
                    <div className="govsa-search__results ds-header">
                        <div className='govsa-search__container'>
                            {this.state.filteredItem.map((item, index) => {
                                return(  
                                    <div key={index} className="govsa-search__result" onClick={event => { this.setState({filteredItem:[]})}}>
                                        <a href={item.url}><p>{document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr" ? item.title : item.titlear}</p></a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
          
            <div className="collapse navbar-collapse order-md-1 order-2" id="navbarSupportedContent">
            <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="/styles" > {t("styles")}</Link>
                            <div className="govsa-tabs--border"></div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="/components">{t("components")}</Link>
                            <div className="govsa-tabs--border"></div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="/patterns"> {t("patterns")}</Link>
                            <div className="govsa-tabs--border"></div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="/about"> {t("aboutUs")}</Link>
                            <div className="govsa-tabs--border"></div>
                        </li>
                    </ul>
            </div>
            <div className="govsa-vison-2030 order-md-3 order-3">
                    <img src={VisionLogo} width="68" alt="" />
                </div>
        </nav>
    </header>
    
    )
    }
}
export default withNamespaces()(Header);
