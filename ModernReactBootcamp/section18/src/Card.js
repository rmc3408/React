import React from 'react'

function Card(props) {
    const lastCard = 51 - props.remaining;
    //console.log(lastCard);
    return (
        <div className="Card-deck">
            <p>{props.remaining}</p>
            <img src={props.card[lastCard]} alt={lastCard} />
        </div>
    )
}
export default Card;
