class App extends React.Component {
  render() {
    return(
      <div>
        <Personal from="Raphael" to="Ivan" />
        <Personal from="Andrea" to="Raphael" />
      </div >
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
