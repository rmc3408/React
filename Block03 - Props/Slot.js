class Slot extends React.Component {
  render() {
    console.log(this.props);
    const fruits = ["🥣", "🍏", "🌳"];
    const rnd1 = Math.floor(Math.random() * fruits.length);
    const rnd2 = Math.floor(Math.random() * fruits.length);
    const rnd3 = Math.floor(Math.random() * fruits.length);
    const { frnd1, frnd2, frnd3 } = this.props;
      
    const isWinner = ((rnd1 === rnd2) && (rnd1 === rnd3));

    //const slotNumber = fruits[rnd].repeat(this.props.num);
    return (
        <div>
        <h1> {frnd1} {frnd2} {frnd3} </h1>
        <h1> {fruits[rnd1]} {fruits[rnd2]} {fruits[rnd3]} </h1>
        <p> { isWinner ? <h3> Winner !</h3> : <h3> Lose !</h3> } </p>
      </div>
    );
  }
}
