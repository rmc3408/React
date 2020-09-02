class App extends React.Component {
  render() {
    return(
      <div>
        <Personal from="Raphael" to="Ivan" />
        <Personal from="Andrea" to="Raphael" />
        
        <Personal
          from="Andrea"
          to="Alessandro"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          bangs={4}
          image=".\fire_1f525.png"
        />
      </div >
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
