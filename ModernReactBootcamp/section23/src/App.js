import React, { Component } from "react";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import "./App.css";
import MyNavbar from "./MyNavbar";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetail from "./DogDetail";


class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };
  render() {
    const getTheDog = (myRt) => { 
      return this.props.dogs.find(p => myRt.match.params.name.toLowerCase() === p.name.toLowerCase());
    };

    return (
      <div>
        <MyNavbar dogsName={this.props.dogs.map(r=> r.name)} />
        <Switch>
          <Route exact path="/dogs" render={(rt) => <DogList route={rt} dogs={this.props.dogs} />} />
          <Route exact path="/dogs/:name" render={rt => <DogDetail {...rt} dogs={getTheDog(rt)} />} />
          <Redirect to="/dogs" />
          
        </Switch>
      </div>
    );
  }
}

export default App;
