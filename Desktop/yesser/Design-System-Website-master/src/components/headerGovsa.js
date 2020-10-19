import React from 'react';
// import '../../../assets/govsa-ds/theme/govsa-theme-global.scss';
import Logo from '../assets/images/logo-govsa.svg';
import VisionLogo from "../assets/images/vision-2030-white.svg";
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import searchList from '../utils/searchList';

// const content = (
//     searchList.flatMap(list =>
//       console.log(list.url, list.title),
//     )
// );

function Header({ t }) {
    return (
        <div>
        <div className="d-flex justify-content-between px-3">
        <div>
            <a href="#" className="govsa-link">{t("site-lang")}</a> | <a href="#" className="govsa-link">{t("Contact-us")}</a>
        </div>
        <div>
            <a href="#" className="govsa-link">{t("My-Account")}</a> | <a href="#" className="govsa-link">{t("Log-out")}</a>
        </div>
       </div>
        <header className="govsa-header">
        <nav className="navbar navbar-expand-lg govsa-header__open-search"><button className="navbar-toggler p-0"
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"
                aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation"><i
                    className="govsa--menu text-white"></i></button>
            <a className="govsa-logo w-75"  href="#">
                <Link><img src={Logo} width="136" alt="" /></Link>
    
            </a>
            <div className="col-md-3 my-2 order-1 order-md-2 p-0">
                <div className="input-group govsa-search--header"><input type="text"
                        className="govsa-input govsa-header__search__input" placeholder={t("search")} />
                    <div className="input-group-append"><button className="govsa-clear__button d-none" type="button">
                            <i className="govsa--closed"></i>
                        </button></div>
                    <div className="input-group-append"><button className="govsa-header__search__button" type="button">
                            <i className="govsa--zoom"></i>
                        </button></div>
                </div>
            </div>
            <div className="collapse navbar-collapse order-md-1 order-2" id="navbarSupportedContent2">
                <ul className="navbar-nav p-0">
                    <ul className="nav nav-tabs govsa-tabs">
                        <li className="nav-item dropdown govsa-tabs__dropdown"><a className="nav-link dropdown-toggle"
                                data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                                aria-expanded="false">   {t("accordion-lable")}<i className="govsa-icon govsa--arrowdown"></i></a>
                            <div className="govsa-tabs--border"></div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <ul className="govsa-container--flex-wrap">
                                    <li className="govsa-header__list--width"><a className="dropdown-item"
                                            href=""><span>Know About
                                                Kingdom</span></a></li>
                                    <li className="govsa-header__list--width"><a className="dropdown-item"
                                            href=""><span>Digital
                                                Transformation</span></a></li>
                                    <li className="govsa-header__list--width"><a className="dropdown-item"
                                            href=""><span>Labor and
                                                Employment in the Kingdom</span></a></li>
                                    <li className="govsa-header__list--width"><a className="dropdown-item"
                                            href=""><span>Rules,
                                                Regulations and Policies</span></a></li>
                                    <li className="govsa-header__list--width"><a className="dropdown-item"
                                            href=""><span>National
                                                Plans and Initiatives</span></a></li>
                                    <li className="govsa-header__list--width"><a className="dropdown-item"
                                            href=""><span>Government
                                                Budget</span></a></li>                                 
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <li className="nav-item"><a className="nav-link" href="#">   {t("accordion-lable")} </a>
                        <div className="govsa-tabs--border"></div>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#">   {t("accordion-lable")} </a>
                        <div className="govsa-tabs--border"></div>
                    </li>
                </ul>
            </div>
            <a href="#" className="govsa-vison-2030 order-md-3 order-3"> <img src={VisionLogo} width="68" alt="" /> </a>
        </nav>
    </header>
    </div>
  );
}
export default withNamespaces()(Header);
//export default Header;
