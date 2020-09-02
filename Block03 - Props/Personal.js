class Personal extends React.Component {
  

  render() {
    console.log(this.props);
    let bangs = '!'.repeat(this.props.bangs);

    return (
      <div>
        <h1> Hello from {this.props.from} to {this.props.to} {bangs}</h1>
        <img src={this.props.image}/>
        
      </div>
    );
  }
}

