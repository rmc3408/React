import React, { Component } from "react";
//import "./App.css";
//import Intro from "./Intro/Intro";
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Form from "./Components/Form";
import firebase from 'firebase';
import _ from 'lodash';

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
      notes: [],
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
    event.preventDefault();
    alert(`Your note ${this.state.currentTitle} is saved`);
    const data = {
      title: this.state.currentTitle,
      details: this.state.currentDetails
    };
    firebase.database().ref('/notes').push(data, response => response);
    this.setState({
      currentTitle: '',
      currentDetails: ''
    });

  }
  
  deleteNote(id) {
    firebase.database()
      .ref(`/notes/${id}`)
      .remove();

  }


  componentWillMount() {
    firebase.initializeApp({ 
    apiKey: "AIzaSyATq633PXIe2odQFUrUik2wSCEYVx7OEMs",
    authDomain: "notepad-rmc3408.firebaseapp.com",
    databaseURL: "https://notepad-rmc3408.firebaseio.com",
    projectId: "notepad-rmc3408",
    storageBucket: "notepad-rmc3408.appspot.com",
    messagingSenderId: "715052111786",
    appId: "1:715052111786:web:16a025a940bea7b0737dd3",
    measurementId: "G-X481CY55C5"
    });
    console.log('Firebase connection sucessful');

    firebase.database()
      .ref('/notes')
      .on('value', snapshot => {
        const fbstore = snapshot.val();
        const store = _.map(fbstore, (value, id) => {
          return {
            id: id,
            title: value.title,
            details: value.details
          };
        });
        this.setState({
          notes: store
    
        });
      });
  }


  render() {
    return (
      <div >
        <div className={inStyles}> 
        <Header owner={owner} />
        </div>
        <Form
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        
        />

        <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)} />

        
      </div>
    );
  }
}

export default App;
