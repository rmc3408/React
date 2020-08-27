function getNum() {
  const num = Math.floor(Math.random() * 10) + 1;
  return num;
}

class NumPicker extends React.Component {
  render() {

    const number = getNum();

    let msg;
    if (number <= 5) {
      msg = (
        <div>
          <hr />
          <p>Bad</p>
          <hr />
        </div >
      );
    }
    else
      msg = "High";


  return(
      <div>
        <h2>Your number is ..</h2>
        <h1> {number} => {number == 7 ? "SeVen" : "Lose"} </h1>
        <h3> {number > 7 && <img src='./logo.svg' />} </h3>
        {msg}
      </div >
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
