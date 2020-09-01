import React, { Component } from "react";
//import "./App.css";
import Intro from "./Intro/Intro";
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Form from "./Components/Form";

const owner = {
  name: "Raphael",
  age: 39,
  isEmployee: true,
};

const inStyles = {
  textAlign: 'right'
  
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "Add course notes",
          details: "Add your first task",
        },
        {
          id: 2,
          title: "Add first Task",
          details: "What need to do first",
        },
        {
          id: 3,
          title: "Add your next payment",
          details: "Company - Price",
        },
      ],
      name: "Ivan",
      age: 45,
      currentTitle: '',
      currentDetails: ''
    };
  }
  /*componentDidMount() {
    console.log('App component was loaded!');
  }*/
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    alert(`Your note ${this.state.currentTitle} is saved`);
    event.preventDefault();
  }

  render() {
    return (
      <div >
        <div className={inStyles}> 
        <Header owner={owner} />
        </div>
        <Form/>

        <Grid notes={this.state.notes} />

        <div>
          <p > Variable USER using Objects outside Class = {owner.name} </p>
          <Intro user={owner} />
          <p> Variable USER using State, object of the App Class {this.state.name}</p>
          <Intro user={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
