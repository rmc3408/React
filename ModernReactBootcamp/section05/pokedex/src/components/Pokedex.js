import Pokecard from "./Pokecard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Pokedex(props) {
  //console.log(props);
  const pokecards = props.pokecards;
  //console.log(pokecards);
  console.log(props.isWinner);
  
  return (
    <div>
      <p> {props.isWinner} </p>
      <Container>
        <Row>
          {pokecards.map((card) => {
            //console.log(card);
            return (
              <Col xs lg={3}>
                <div key={card.id}>
                  <Pokecard {...card} />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Pokedex;
