import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Person from './Person/Person';

class App extends Component {

  ///////////////////////
  //  Object in App Class
  //////////////////////

  state = {
    persons: [
      { id: '002', name: 'Raph', age: 28 },
      { id: '003', name: 'Andrea', age: 29 },
      { id: '004', name: 'Lu', age: 26 }
    ],
    otherState: 'some other value',
    showNames: true
  }

  ///////////////////////////////
  //  Functions in App Class  ///
  ///////////////////////////////

  //Function to Change name after click in button using BIND
  switchFullName = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Raphael Molinaro Coelho', age: 39 },
        { name: 'Andrea Pineda', age: 30 },
        { name: 'Luana Cesar', age: 30 }
      ]
    })
  }

  //Function to Change name after update INPUT Form in LIST and conditional
  nameModifier = (event, Theid) => {
    const personNumber = this.state.persons.findIndex(
      p => { return p.id === Theid }
    );

    //Create Object to modify
    const SpecificPerson = { ...this.state.persons[personNumber] };
    SpecificPerson.name = event.target.value;

    //Update Array of Persons
    const personsArray = [...this.state.persons];
    personsArray[personNumber] = SpecificPerson;

    this.setState({
      persons: personsArray
    });
  }


  //Function to SHOW and HIDE name in LIST
  toggleListNames = () => {
    let nameNow = this.state.showNames;
    this.setState({
      showNames: !nameNow

    });
  }

  //Function to DELETE A SPECIFIC name from LIST
  deleteNameHandler = (numSelected) => {
    //let totalPeople = this.state.persons; //do not copy only reference.
    //let totalPeople = this.state.persons.slice();
    let totalPeople = [...this.state.persons];
    totalPeople.splice(numSelected, 1);
    this.setState({ persons: totalPeople });


  }
  /**    RENDER START HERE */
  render() {

    const style = {
      backgroundColor: 'red',
      color: 'white',
      margin: '15px',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    //EVERY CHANGE will RENDER AGAIN
    let personMap = null;
    if (this.state.showNames) {
      
      style.backgroundColor = 'Green';

      personMap = (
        <div>
          {this.state.persons.map((item, index) => {

            /* click={this.deleteNameHandler.bind(this, index)}*/
            return (<Person
              click={() => this.deleteNameHandler(index)}
              name={item.name}
              age={item.age}
              key={item.id}
              changed={(event) => { this.nameModifier(event, item.id) }} />)

          })}
        </div>
      );
      
    }



    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Section 05 </h1>
          <p>Styling Component & Elements</p>
        </header>


        <button
          style={style}
          onClick={this.switchFullName}>full Name</button>

        <button
          style={style}
          onClick={this.toggleListNames}>Toggle List of Name</button>


        <h2> Render a list using map function</h2>
        {/* Best Solution - Call Conditional List*/}
        {personMap}
        


      </div>
    );
   }
}

export default App;
