import React, { Component } from 'react'; //import default and one element
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (                      // return JSX, not HTML, () is syntax block.
                                  /* Only allow one block ( <div>  </div>) per render! */
      <div className="App">
        <h1> Hello Raphael </h1>
        <Person name="Raph" age="39"/> 
        <Person name="Max" age="29"/>
        <Person name="Ivan" age="45"> My Party: </Person>
        

      </div>
    );
    //return React.createElement('div', {className: App },       //same as before, just to explain JSX
    //          React.createElement('h1', null, 'hi, ', 'my name is Raph'));
  }


}

export default App; //export to index
