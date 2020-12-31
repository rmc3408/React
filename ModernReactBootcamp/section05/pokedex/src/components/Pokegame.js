import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component { 
    render() {
        //console.log(this.props.pokemons);
        let hand1 = [];
        let hand2 = [...this.props.pokemons];
        //console.log(hand1);
        //console.log(hand2);
        while (hand1.length < hand2.length) {
            let chooseIndex = Math.floor(Math.random() * hand2.length);
            //console.log(chooseIndex);
            let choosePokemon = hand2[chooseIndex];
            //console.log(choosePokemon);
            hand2.splice(chooseIndex, 1);
            //console.log(removed);
            hand1.push(choosePokemon);
            
        }
            //console.log(hand1);
        console.log(hand2);
        
        let total1 = 0;
        for (let i=0; i < hand1.length; i++) {
            total1 += hand1[i].base_experience;
        }
        console.log(total1);
        let total2 = 0;
        for (let i=0; i < hand1.length; i++) {
            total2 += hand2[i].base_experience;
        }
        console.log(total2);
        
        return <div>
            <h3>hand 01</h3>
            <p> total team experience = {total1}XP </p>
            <Pokedex pokecards={hand1} isWinner={total1>total2} />
            <h3>hand 02</h3>
            <p> total team experience = {total2}XP </p>
            <Pokedex pokecards={hand2} isWinner={total1>total2}/>
        </div>

    }

}
export default Pokegame;
