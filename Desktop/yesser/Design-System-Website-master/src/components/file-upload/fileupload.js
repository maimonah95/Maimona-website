import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class fileUploader extends Component {
    fileuploader(){
        var fileupload_buttons = document.getElementsByClassName("govsa-fileupload__input");
        for (var i = 0; i < fileupload_buttons.length; i++) {
          fileupload_buttons[i].addEventListener("change", function() {
            var fileName = this.value.split("\\").pop();
            this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML= fileName;
            this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("d-none");
        
            var fileupload_buttons2 = document.getElementsByClassName("govsa-fileupload__bnt");
            for (var i = 0; i < fileupload_buttons2.length; i++) {
            this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[i].removeAttribute("disabled");
            }
          });
        }
        
        var clear_buttons = document.getElementsByClassName("clear");
        for (var i = 0; i < clear_buttons.length; i++) {
          clear_buttons[i].addEventListener("click", function() {
          
           if (document.getElementsByTagName("main")[0].getAttribute("dir") === "ltr") {
               this.previousElementSibling.innerHTML="No file choosen";
              } else {
                this.previousElementSibling.innerHTML="لا يوجد مرفق";
              }
        
           var fileupload_buttons3 = document.getElementsByClassName("govsa-fileupload__bnt");
           for (var i = 0; i < fileupload_buttons3.length; i++) {
            this.nextElementSibling.children[i].setAttribute("disabled",false);
           }
           this.classList.add("d-none");
           this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value="";
          });
        }
     }

    componentDidMount() { // is there a better way to do this? 
        this.fileuploader();
    }
    render() {
      const { t, i18n } = this.props;
        return (
        <div className="col-md-12 mt-4">
        <form>
            <div className="govsa-fileupload">
                <input className="govsa-fileupload__input" type="file" name="file" />
                <a className="govsa-link" href="#">  {t("fileupload-choose-file")}</a>
                <p>  {t("fileupload-file-size")}</p>
                <label className="govsa-fileupload__name">  {t("fileupload-lable")}</label>
                <i className="govsa--closed clear d-none"></i>
                <div>
                    <button type="button" className="btn govsa-btn--darkBlue govsa-fileupload__bnt"
                        disabled>  {t("fileupload-Upload")}</button>
                </div>
            </div>
        </form>
    </div>
        )
    }
}

export default withNamespaces()(fileUploader);
