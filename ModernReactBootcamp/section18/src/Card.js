import React from 'react'

function Card(props) {
    const lastCard = 51 - props.num;
    //console.log(lastCard);
    return (
        <div>
            <img className="Card-img" src={props.imgUrl} alt={lastCard} />
        </div>
    )
}
export default Card;
