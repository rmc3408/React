class Slot extends React.Component {
  render() {
    console.log(this.props);
    const fruits = ["🥣", "🍏", "🌳"];
    const rnd1 = Math.floor(Math.random() * fruits.length);
    const rnd2 = Math.floor(Math.random() * fruits.length);
    const rnd3 = Math.floor(Math.random() * fruits.length);
    const isWinner = ((rnd1 === rnd2) && (rnd1 === rnd3));
    
    
    const { frnd1, frnd3, frnd2 } = this.props;
    console.log(frnd1);
       

    //const slotNumber = fruits[rnd].repeat(this.props.num);
    return (
        <div>
        <h1> {frnd1} {frnd2} {frnd3} </h1>
        <h1> {fruits[rnd1]} {fruits[rnd2]} {fruits[rnd3]} </h1>
        <p className={isWinner ? 'win' : 'lose'}> Results </p>
        <p> { isWinner ? <h3> Winner !</h3> : <h3> Lose !</h3> } </p>
      </div>
    );
  }
}
