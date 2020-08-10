import React, { Component } from 'react'; //import default and one element
import './App.css';
import Person from './Person/Person';


class App extends Component {
  // State properties (variable of class Components) can be use dynamic.
  state = {
    persons: [
      { name:"Raph", age:"39" },
      { name:"Emma", age:"5" },
      { name: "Max", age: "29" }],
    zipcode: "20551"
  };

  switchNameHandler = (newName) => {
    console.log("clicked");
    //Dont work = {this.state.persons[0].name = 'Ivanovitch'}
    this.setState({
      //repeat all content of property key and do not discart others. Merge.
      persons: [
        { name: "Raphael", age: "39" },
        { name: "Emma", age: "5" },
        { name: newName, age: "29" }]

    });
  }
  nameHandler = (event) => {
      this.setState({
        persons: [
          
          { name: "Emma", age: "5" },
          { name:event.target.value , age:"39" },
          { name: "Servi" , age:"29" } ]
  
      }); 
      
  }

  render() {
    return (                      // return JSX, not HTML, () is syntax block.
                                  /* Only allow one block ( <div>  </div>) per render! */
      <div className="App">
        <h1> Hello Raphael </h1>
        <button onClick={this.switchNameHandler.bind(this, "John")}> Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} /> 
        <Person changed={this.nameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person transferClick={this.switchNameHandler.bind(this, 'Emmilia')} name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person  name="Ivan" age="45"> My Party: </Person>
        

      </div>
    );
    //return React.createElement('div', {className: App },       //same as before, just to explain JSX
    //          React.createElement('h1', null, 'hi, ', 'my name is Raph'));
  }


}

export default App; //export to index
