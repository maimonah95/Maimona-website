
// import React, { Component } from 'react';
// import Button from '../buttons/index'


// export default class Copybutton extends Component {
//     Copytext(){
//         var buttons = document.getElementsByClassName("copy-code");
//         for (var i = 0; i < buttons.length; i++) {
//           buttons[i].addEventListener("click", function() {
//             document.getElementsById("code-text").select();
//             document.getElementsById("code-text").execCommand("copy");
//           });
//         }
//      }

//     componentDidMount() { // is there a better way to do this? 
//         this.Copytext();
//     }
//     render() {
//         return (
//           <Button className="btn govsa-btn--darkBlue mt-3 f-r copy-code"  text="copy"></Button>
//         )
//     }
// }

import React from 'react';
 import Button from '../buttons/index'
class CopyExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = { copySuccess: '' } 
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    return (
      <div>
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
          <div>
               <button className="btn govsa-btn--darkBlue mt-3 f-r" onClick={this.copyToClipboard}>copy</button>
            {this.state.copySuccess}
          </div>
        }
        <form>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value='hi reema'
          />
        </form>
      </div>
    );
  }

}

export default CopyExample;




// var buttons = document.getElementsByClassName("copy-btn");
// var textcode = document.getElementsByClassName("textcode")[0];
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     textcode[i].select();
//     document.execCommand('copy');
//   });
// }