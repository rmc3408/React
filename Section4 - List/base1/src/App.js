import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '002', name: 'Max', age: 28 },
      { id: '003', name: 'Manu', age: 29 },
      { id: '004', name: 'Minnie', age: 26 }
    ],
    otherState: 'some other value',
    showNames: true
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  nameModifier = (event, Theid) => {
    const personNumber = this.state.persons.findIndex(
      p => { return p.id === Theid}
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



  toggleListNames = () => {
    let nameNow = this.state.showNames;
    this.setState({
      showNames: !nameNow

    });
  }

  deleteNameHandler = (numSelected) => { 
    //let totalPeople = this.state.persons; //do not copy only reference.
    //let totalPeople = this.state.persons.slice();
    let totalPeople = [...this.state.persons];
    totalPeople.splice(numSelected, 1);
    this.setState({persons: totalPeople});


  }
/**    RENDER START HERE */
  render() {
    const style = {
      backgroundColor: 'white',
      margin: '15px',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let personMap = null;
    if (this.state.showNames) {
      personMap = (
        <div>
          {this.state.persons.map((item, index) => { 
            return (<Person
              /* click={this.deleteNameHandler.bind(this, index)}*/ 
              click={() => this.deleteNameHandler(index)}
              name={item.name}
              age={item.age}
              key={item.id}
              changed={(event) => { this.nameModifier(event, item.id) }}
            />)  
          })}
        </div>
      );
    }
          
    /** 
    let personVariable = null;
    if (this.state.showNames) {
      personVariable = (
      < div >
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Raphael')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>);
    }
    */

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Section 04 </h1>
          <p>List and Conditionals</p>
      </header>
      
        
             
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>full Name</button>
        
        <button 
          style={style}
          onClick={this.toggleListNames}>Toggle List of Name</button>
        {/* Best Solution */} 
        {/*personVariable*/}

        <h2> Render a list using map function</h2>
        {personMap}
        
        {/* Solution 02 
        {this.state.showNames ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Raphael')}
              changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div>
          : null}
          */}
        
        
        

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
