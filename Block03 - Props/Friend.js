class Friend extends React.Component {
  static defaultProps = {
    name: 'John Doe',
    bangs: 1
  };
  render() {
    let bangs = '!'.repeat(this.props.bangs);
      console.log(this.props);
        const { name, hobbies } = this.props;

      return (
        <div>
              <h1> My name is {name}</h1>
          {hobbies.map(r => <h4>{r} {bangs}</h4>)}  
        </div>
      );
    }
  }