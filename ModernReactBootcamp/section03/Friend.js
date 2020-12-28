class Friend extends React.Component {
  static defaultProps = {
    name: "John Doe",
    hobbies: ["run"],
    bangs: 1
  };

  

  render() {
    let bangs = "!".repeat(this.props.bangs);
    console.log(this.props);
    const { name, hobbies } = this.props;
    
    const myStyle = {
      color: 'red'
    };
    

    return (
      <div >
        <h1 style={myStyle}> My name is {name}</h1>
        {hobbies.map((r) => (
          
          <h4 style={myStyle} style={{ fontSize:'30px', color:'green' }}>
            {r} {bangs}
          </h4>
        ))}
      </div>
    );
  }
}
