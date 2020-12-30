import React from 'react';
import Card from 'react-bootstrap/Card';

function Pokecard(props) {
  //console.log(props);
    const pokeURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div >          
      <Card className="mycard" >
        <Card.Body>
          <Card.Title> {props.name} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {props.type} </Card.Subtitle>
          <Card.Img variant="top" src={pokeURL} />
          <Card.Text> base of experience {props.base_experience} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Pokecard;
