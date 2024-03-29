import React, { Component } from "react";
import Pokegame from "./components/Pokegame";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    //console.log('app render');

    return (
      <div className="App">
        <Jumbotron fluid>
          <h2 className="Pokedex-Jumbotron">Pokedex Game</h2>
        </Jumbotron>
        <Pokegame {...this.props} />
      </div>
    );
  }
}

export default App;
