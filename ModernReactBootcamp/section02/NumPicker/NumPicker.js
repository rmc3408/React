function getNum() {
  const num = Math.floor(Math.random() * 10) + 1;
  return num;
}

class NumPicker extends React.Component {
  render() {
    const myNum = getNum();

    let msg;
    if (myNum <= 4) {
      msg = (
        <div>
          <hr />
          <p>low</p>
          <hr />
        </div >);
    } else {
      msg = 'High';
    }

      return (
          <div>
            <h2>Your number is ..</h2>
            <h1> {myNum} {myNum == 7 ? "SeVen" : "Lose"} </h1>
            <h3> {myNum > 7 && <img src='./win.jfif' /> } </h3>
          {msg}
          </div >
        );
      }
}

//ReactDOM.render(<NumPicker />, document.getElementById('rootNumPicker'));
