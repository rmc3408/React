import React from 'react';
import Card from 'react-bootstrap/Card';

function Pokecard(props) {
  console.log(props);
  return (
    <div>
          <h3>Pokecard</h3>       
          
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Pokecard;
