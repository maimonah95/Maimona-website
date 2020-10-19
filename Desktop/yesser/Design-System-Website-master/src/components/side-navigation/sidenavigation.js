import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

class SideNavigation extends Component {

     state = {
        activeIndex: 0
      }
     toggleClass(index, e) {
        this.setState({ activeIndex: index });
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
    render() {
        const { t, i18n } = this.props;
        return (
          <div>
        <div  className="row mt-3 mb-3 mt-4">
            <div className="col-md-4">
                <ul  className="nav flex-column govsa-sideNavigation">
                    <li  className={"nav-item", this.state.activeIndex==0  &&"govsa-active"} onClick={this.toggleClass.bind(this, 0)}>
                        <a  className="nav-link" href="#">{t("sideNavigation-lable")}</a>
                    </li>
                    <li  className={"nav-item", this.state.activeIndex==1  &&"govsa-active"} onClick={this.toggleClass.bind(this, 1)}>
                        <a  className="nav-link" href="#">  {t("sideNavigation-lable")}</a>
                    </li>
                    <li  className={"nav-item", this.state.activeIndex==2  &&"govsa-active"} onClick={this.toggleClass.bind(this, 2)}>
                        <a  className="nav-link" href="#">{t("sideNavigation-lable")}</a>
                    </li>
                    <li  className="govsa-sideNavigation__dropdown nav-item">
                        <button  className="govsa-sideNavigation__button">
                        {t("sideNavigation-lable")} <i  className="govsa--right"></i>
                        </button>
                    </li>
                    <div  className="govsa-dropdown-container flex-column">
                        <li  className={"nav-item", this.state.activeIndex==3  &&"govsa-active"} onClick={this.toggleClass.bind(this, 3)}>
                            <a  className="nav-link" href="#">{t("sideNavigation-lable")}</a>
                        </li>
                        <li  className={"nav-item", this.state.activeIndex==4  &&"govsa-active"} onClick={this.toggleClass.bind(this, 4)}>
                            <a  className="nav-link" href="#">{t("sideNavigation-lable")}</a>
                        </li>
                        <li  className={"nav-item", this.state.activeIndex==5  &&"govsa-active"} onClick={this.toggleClass.bind(this, 5)}>
                            <a  className="nav-link" href="#">{t("sideNavigation-lable")}</a>
                        </li>
                    </div>
                    <li  className={"nav-item", this.state.activeIndex==6  &&"govsa-active"} onClick={this.toggleClass.bind(this, 6)}>
                        <a  className="nav-link" href="#">{t("sideNavigation-lable")}</a>
                    </li>
                </ul>
            </div>
        </div>
          </div>

        );
    }
}
export default withNamespaces()(SideNavigation);