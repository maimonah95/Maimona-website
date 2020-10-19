
import React, { Component } from 'react';
import ColseTag from '../../assets/images/closeTag.svg'
import { withNamespaces } from 'react-i18next';
class ColseTags extends Component {
    colseTags(){
        var buttons = document.getElementsByClassName("colsed-tag");
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", function() {
            this.parentNode.remove();
          });
        }
     }

    componentDidMount() { // is there a better way to do this? 
        this.colseTags();
    }
    render() {
         const { t, i18n } = this.props;
        return (
            <div class="row my-3 mt-4">
                <div class="col-md-2 mb-3">
                    <span class="govsa-tag">     {t("components_tag")} </span>
                </div>
                <div class="col-md-2">
                    <span class="govsa-tag">     {t("components_tag")}  
                        <button class="govsa-clear__button colsed-tag">
                            <img src={ColseTag}/>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default withNamespaces()(ColseTags);

