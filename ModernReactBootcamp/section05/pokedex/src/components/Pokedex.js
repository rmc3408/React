import Pokecard from "./Pokecard";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Pokedex(props) {
  //console.log(props);
  const pokecards = props.pokecards;
  //console.log(pokecards);
  return (
    <div>
      <Jumbotron fluid>
        <h2 className="Jumbotron">Pokedex Game</h2>
      </Jumbotron>
      <Container>
        <Row>
          {pokecards.map((card) => {
            //console.log(card.id);
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
