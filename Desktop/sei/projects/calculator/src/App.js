import React from 'react';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1:0,
      num2:0,
      sum :0,
    }
  }
  OnClickSavenum1 = (e) => {
    console.log('valu' + e.target.value);
    e.preventDefault();
    this.setState({
      num1: e.target.value,
      sum: (e.target.value) + (this.state.num2)
    });
     console.log(this.state.sum + 'this is the sum')
  }
    OnClickSavenum2 = (e) => {
        console.log('valu' + e.target.value);
        e.preventDefault();
        this.setState({
          num2: e.target.value,
          sum: this.state.num1 + e.target.value
        });
         console.log(this.state.sum + 'this is the sum')
      }
      getSum = () => {
        this.setState({
        sum: this.state.num1 + this.state.num2
        
        });
        console.log({this.num1 +this.num2} + 'summ')
      }
  // num2Fun
  render(){

    return (
<div className="container">
  < form onSubmit={this.getSum}>
  <h1>Add with React!</h1>

  <div className="add">
    <input type="text" value={this.state.num1} onChange={this.OnClickSavenum1}/>
    <span>+</span>
    <input type="text" value={this.state.num2} onChange={this.OnClickSavenum2}/>
    <span>=</span>
    <h3 value={this.state.sum}>Addition results go here!</h3>
  </div>
  </form>
</div>
    );
  }
}
