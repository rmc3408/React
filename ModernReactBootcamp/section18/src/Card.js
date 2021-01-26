import React from 'react'

function Card(props) {
    console.log(props.card[1]);

    return (
        <div className="Card-deck">
            <p>{props.remaining}</p>
            <img src={props.card[1]} alt={props.card} />
        </div>
    )
}
export default Card;
