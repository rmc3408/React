import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div>
        <Personal from="Raphael" to="Ivan"/>
        
      </div >
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
