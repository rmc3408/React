import Pokecard from "./Pokecard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Pokedex(props) {
  //console.log(props);
  const pokecards = props.pokecards;
  //console.log(pokecards);
  //console.log(props.isWinner);

  return (
    <div className="Pokedex-hand">
      <h1 className={props.isWinner? 'Pokedex-Winner': 'Pokedex-lost'}> {props.isWinner ? "Winner" : "Lost"} </h1>
      <Container>
        <Row>
          {pokecards.map((card) => {
            //console.log(card);
            return (
              <div key={card.id}>
                <Col xs lg={3}>
                  <Pokecard {...card} />
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Pokedex;
