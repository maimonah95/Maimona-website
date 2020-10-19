import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import List from './components/List';
import About from './components/About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  todos:['eat','play','sleep']
      todos: [
        { id: 7, title: "eat fried chicken", done: true },
        { id: 8, title: "review react", done: false },
        { id: 9, title: "sleep", done: false }
      ]
    };
  }
  try = () =>{
    console.log("wpppp");
  }

  render() {

    //  console.log(this.state.todos)
    return (
      <Router>
        <div>
          {/* <List todos={this.state.todos}/> */}
            <Link to="/">Home</Link> {'||  '}
            <Link to="/List">Task</Link> {'||  '}
            <Link to="/About">About</Link>{'||  '}

          <Route exact path="/" component={Home}  />

          <Route 
          path="/List" 
          component={()=> <List tasks={this.state.todos} />}  
          />
          <Route path="/About" component={About} />
        </div>
        {/* <div>
          <h3>App</h3>
          <Home />
          <List />
          <About />
        </div> */}
      </Router>
    );
  }
}
