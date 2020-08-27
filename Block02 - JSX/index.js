
class App extends React.Component {
  render() {
    return(
      <div>
        <Personal />
        <NumPicker />
      </div >
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
