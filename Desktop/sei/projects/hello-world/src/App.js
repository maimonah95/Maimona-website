
//Define our App component class
import React from 'react';
import Hello from './Hello';
class App extends React.Component {
  //what should the component render?
render(){
  const person = {
    name:'mim',
    age:0,
    favorites: [
      'westworld','person of interest','scrubs'
    ],
  }
  //We need Return somthing...

  return(
  <div>
         {/* <h1> Hello world {40 + 2 } </h1>
         <h1>wooo</h1> */}
         {/* <Hello name={'maimona'} age={0}/> */}
         < Hello name = {person.name} age = {person.age}
         favorites = {
           person.favorites
         }
         />
         {/* <Hello /> */}
   </div>
);
}
}
//to use it in other file
export default App;