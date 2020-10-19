
import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
class Search extends Component {
    Search(){
        
        var input = document.getElementsByClassName("govsa-search__input");
        
        for (var i = 0; i < input.length; i++) {
            input[i].addEventListener("input", function() {
                var buttons2 = document.getElementsByClassName("govsa-search__input");
                for (var i = 0; i < buttons2.length; i++) {
                    if(this.value === ""){
                        this.nextElementSibling.children[i].classList.add("d-none");
                        this.parentElement.nextElementSibling.classList.add("d-none");
                   
                        if ( document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr") {
                           this.style.borderBottomLeftRadius= "8px";
                           this.nextElementSibling.nextElementSibling.children[i].style.borderBottomRightRadius= "8px";
                        } else {
                            this.style.borderBottomRightRadius= "8px";
                            this.nextElementSibling.nextElementSibling.children[i].style.borderBottomLeftRadius= "8px";                        }
                    
                    }else{
                        this.nextElementSibling.children[i].classList.remove("d-none");
                        this.parentElement.nextElementSibling.classList.remove("d-none");
                        if (document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr") {
                            this.style.borderBottomLeftRadius= "0px";
                            this.nextElementSibling.nextElementSibling.children[i].style.borderBottomRightRadius= "0px";
                        } else {
                            this.style.borderBottomRightRadius= "0px";
                            this.nextElementSibling.nextElementSibling.children[i].style.borderBottomLeftRadius= "0px";
                        }
                    
                }
              }
          });
        }
        var clearButton = document.getElementsByClassName("govsa-clear__button");
        for (var i = 0; i < clearButton.length; i++) {
            clearButton[i].addEventListener("click", function() {
                this.parentElement.previousElementSibling.value="";
                this.classList.add("d-none");
                this.parentElement.parentElement.nextElementSibling.classList.add("d-none");
                var clearButton2 = document.getElementsByClassName("govsa-search__input");
                for (var i = 0; i < clearButton2.length; i++) {
                if ( document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr") {
                    this.parentElement.previousElementSibling.style.borderBottomLeftRadius= "8px";
                    this.parentElement.nextElementSibling.children[i].style.borderBottomRightRadius= "8px";
                } else {
                    this.parentElement.previousElementSibling.style.borderBottomRightRadius= "8px";
                    this.parentElement.nextElementSibling.children[i].style.borderBottomLeftRadius= "8px";
                    this.parentElement.nextElementSibling.children[i].style.borderBottomRightRadius= "0px";
                }
            }
          });
        }

        // when click outside serach
        document.addEventListener("click", function(){
            var resultsBox = document.getElementsByClassName("govsa-search__results");
            for (var i = 0; i < resultsBox.length; i++) {
                resultsBox[i].classList.add("d-none");
                }
        });

        var resultsBox2= document.getElementsByClassName("govsa-search__results");
        for (var i = 0; i < resultsBox2.length; i++) {
            resultsBox2[i].addEventListener("click", function(e){
                e.stopPropagation();
            });
        }
     }

    componentDidMount() {  
        this.Search();
    }
    render() {
        const { t, i18n } = this.props;
        return (
         
                <div class="row my-3">
                    <div class="col-md-7">
                        <div className="input-group">
                            <input type="text" className="govsa-input govsa-search__input" placeholder={t("search")}/>
                            <div className="input-group-append">
                                <button className="govsa-clear__button d-none" type="button"><i className="govsa--closed"></i></button>
                            </div>
                            <div className="input-group-append">
                                <button className="govsa-search__button" type="button"><i className="govsa--zoom"></i></button>
                            </div>
                        </div>
                        <div class="govsa-search__results d-none">
                            <div class="govsa-search__container">
                                <div class="govsa-search__result my-2 font-weight-bold">
                                {t("search-result")}
                                </div>
                                <div class="govsa-search__result">
                                    <a href="">
                                        <p>
                                        {t("search-result")}
                                        </p>
                                        <span>{t("search-result")}</span>
                                    </a>
                                </div>
                                <div class="govsa-search__result">
                                    <a href="">
                                        <p>
                                        {t("search-result")}
                                        </p>
                                        <span>{t("search-result")}</span>
                                    </a>
                                </div>
                                <div class="govsa-search__result">
                                    <a href="">
                                        <p>
                                        {t("search-result")}
                                        </p>
                                        <span>{t("search-result")}</span>
                                    </a>
                                </div>
                                <div class="govsa-search__result">
                                    <a href="">
                                        <p>
                                        {t("search-result")}
                                        </p>
                                        <span>{t("search-result")}</span>
                                    </a>
                                </div>
                            </div>
                            <div class="govsa-advanced-search">
                                <a class="govsa-link" href="">{t("advanced-search")}</a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default withNamespaces()(Search);