class App extends React.Component {
  render() {
    return (
      <div>
        <Slot frnd1='soup' frnd2='tree' frnd3='apple' num={3} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
