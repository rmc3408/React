class App extends React.Component {
  render() {
    //console.log(this.state);
    
    return (
      <div>
        <div>
          <Personal from="Raphael" to="Ivan"/>
          <Personal from="Andrea" to="Raphael"/>

          <Personal //type of pros ==> pass using {} or ""
            from="Andrea"
            to="Alessandro"
            numberString="3"
            num={3}
            data={[1, 2, 3, 4, 5]}
            isFunny={true}
            bangs={4}
            image=".\fire_1f525.png"
            objeto={{ name: "Raph", age: 39 } }
          />
        </div>

        <div className='Slot'>
          <h1> Slot Machine </h1>
          <Slot frnd1="soup" frnd2="tree" frnd3="apple" num={3} /> 
        </div> 
        
        <div style={{ fontSize: '20px' }}>
          <Friend />
          <Friend name="Emma" hobbies={["Piano", "ballet", "Dolls"]} />
          <Friend name="Ivan" hobbies={["Docs", "Books", "kisses"]} />
          <Friend hobbies={["Play", "Run", "Sleep"]} bangs={4} />
        </div>

        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
