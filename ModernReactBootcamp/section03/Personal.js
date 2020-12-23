class Personal extends React.Component {
  render() {
    console.log(this.props); //cannot change or add data into PROPS (properties)
    const theBangs = '!'.repeat(this.props.bangs);

    return (
      <div>
        <h1> Hello from {this.props.from} to {this.props.to} {theBangs}</h1>
        <img src={this.props.image} alt="fire" />
        
      </div>
    );
  }
}

