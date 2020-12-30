import Pokecard from './Pokecard';

function Pokedex(props) {
    //console.log(props);
    const pokecards = props.pokecards;
    //console.log(pokecards);
    return (
        <div>
            <h1>Pokedex Game</h1>
            { pokecards.map(card => {
                //console.log(card.id);
                return <div key={card.id}>
                    <Pokecard {...card} />
                </div>
             } ) }
            
        </div>
    
)}
export default Pokedex;