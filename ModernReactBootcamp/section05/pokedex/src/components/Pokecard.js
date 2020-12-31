import React from 'react';
import Card from 'react-bootstrap/Card';

function Pokecard(props) {
  //console.log(props);
  //const pokeURL2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  const num = props.id < 10 ? '00' + props.id : props.id < 100 ? '0' + props.id : props.id;
  //console.log(num);
  const pokeURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`;
  return (
    <div >          
      <Card className="mycard" >
        <Card.Body>
          <Card.Title> {props.name} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {props.type} </Card.Subtitle>
          <Card.Img className="Pokecard-img" variant="top" src={pokeURL} />
          <Card.Text> base of experience {props.base_experience} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Pokecard;
