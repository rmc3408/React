import React from "react";

function Dog(props) {
  return <div className="box">
    <h2>My name is {props.name}</h2>
    <img
      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/dog_1f415.png"
      alt="dog"
    />
  </div>;
}

export default Dog;
