function getMood() {
  const feeling = ['Angry', 'Happy', 'Dizzy', 'Hungry'];
  const choice = Math.floor(Math.random() * feeling.length);
  return feeling[choice];
}

/* Arrow function does NOT work outside Class
getMood = () => {
  const feeling = ['Angry', 'Happy', 'Dizzy', 'Hungry'];
  const choice = Math.floor(Math.random() * feeling.length);
  return feeling[choice];
}*/

class Hello extends React.Component {
  render() {
    return (
      <div>
			  <h1>Hello Raphael</h1>
        <h1>Hello Raphael</h1>
        <h3> My age is {9 * 4.34}</h3>
        <h3> My mood is {getMood()}</h3>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
