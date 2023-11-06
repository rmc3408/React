import './App.css';
//import CountMemo from './components/Memo';
import Title from './components/Title';
import Count from './components/Count';
import Button from './components/Button';
import { useState, useCallback, useEffect } from 'react';

function App() {
  const [age, setAge] = useState(1)
	const [salary, setSalary] = useState(50000)
	const [ data, setData ] = useState()

	//const incrementAge = () => setAge(age + 1) // React.Memo see as different function.
	const incrementAge = useCallback(() => setAge(age + 1), [age])

	//const incrementSalary = () => setSalary(salary + 1000)
	const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary])
  
	function getData() {
		fetch('https://jsonplaceholder.typicode.com/todos/'+ age)
      .then(response => response.json())
      .then(json => setData(json))
	}
	

	useEffect(() => {
		getData()
		console.log('USE EFFECTS');
	}, [age])
	
  console.log('APP RENDER COMPONENT', data)

  return (
    <div className="App">
      {/* <CountMemo /> */}

      <Title />

			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>

			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default App;
