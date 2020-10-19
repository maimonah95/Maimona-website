import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

  class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
            selectedComponent : ""
        }
    } 

    sideNavigation(){
        var dropdown = document.getElementsByClassName("govsa-sideNavigation__dropdown");
        var i;
       
        for (i = 0; i < dropdown.length; i++) {
       
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("govsa-active");
                var dropdownContent = this.nextElementSibling;
       
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
            
        }
     }

    componentDidMount() { // is there a better way to do this? 
        this.sideNavigation();
    }
    handleItemClick(index, label) {
        this.setState({
            activeItem: index,
           
        })
        this.props.data(label);
    }

    handleSelectedComponent(compLabel){
        this.state.selectedComponent = compLabel
    }

    /**
     * 
     * @param {*} subMenuItem 
     */
    subMenuItems(subMenuItem, index) {
        return [
            <li 
                className={this.state.activeItem === index ? 'govsa-sideNavigation__dropdown nav-item' : 'govsa-sideNavigation__dropdown nav-item'}
                key={index}
            >
                <button className="govsa-sideNavigation__button">
                    {subMenuItem.label} <i className="govsa--right"></i>
                </button>
            </li>
            ,
            <div className={this.state.activeItem >= 20 ? "govsa-dropdown-container d-block flex-column" : "govsa-dropdown-container flex-column"}>
                {
                    subMenuItem.subMenu.map((item, i) =>
                        <li
                            id={`${index}${i}`}
                            key={`${index}${i}`}
                            className={this.state.activeItem === `${index}${i}` ? 'nav-item govsa-active' : 'nav-item'}
                            // selectedComponent = {item.label}
                            onClick={ () => {
                                this.handleItemClick(`${index}${i}`, item.label);
                                }
                            }
                        >
                            <Link
                                className="nav-link"
                                to={item.href}
                              

                            >
                                {item.label}
                            </Link>
                        </li>
                    )
                }
            </div>

        ]
    }
    render() {
        const { t, i18n } = this.props;
        const navLinks = this.props.elements
        return (
            <nav class="navbar navbar-expand-lg nav-mobile-accordion-sideNavigation">
                <button class="navbar-toggler govsa-sidenavigation__bnt w-100" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span id="lable-mobile-accordion-sideNavigation" class="d-flex justify-content-center"> {t("Menu")}</span>
                </button>
        
            <div class="collapse navbar-collapse accordion mobile-accordion-sideNavigation" id="navbarNavDropdown">
            <ul className='nav flex-column govsa-sideNavigation w-100 mt-md-0 mt-2'>
                {
                    navLinks.map((item, index) => {
                        if (item.subMenu != undefined) {
                            return this.subMenuItems(item, index)
                        } else {
                            return [
                                <li
                                    key={index}
                                    className={this.state.activeItem === index ? 'nav-item govsa-active' : 'nav-item'}
                                    onClick={ () => {
                                        this.handleItemClick(index);
                                        this.props.data(item.label);
                                        document.getElementsByClassName("mobile-accordion-sideNavigation")[0].classList.remove("show");
                                        let sideNavigationlaple =  item.label
                                        document.getElementById("lable-mobile-accordion-sideNavigation").innerHTML = sideNavigationlaple;
                                        }
                                    } 
                                >
                                    <Link
                                        className="nav-link"
                                        to={item.href}
                                        
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ]
                        }
                    }
                    )
                }
            </ul>
            </div>
            </nav>


        );
    }
}
export default withNamespaces()(SideNavigation);