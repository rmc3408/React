
class App extends React.Component {

  render() {
    return (
      <div>
        <Friend name="Emma" hobbies={["Piano", "ballet", "Dolls"]} />
        <Friend name="Ivan" hobbies={["Docs", "Books", "kisses"]} />
        <Friend hobbies={["Play", "Run", "Sleep"]} bangs={4}/>
        
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
