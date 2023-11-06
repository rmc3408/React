import './App.css';
import { useState, useLayoutEffect, useEffect, useCallback, useMemo } from 'react';
import Contact from './Contact';
import Multiplier from './Multiplier';


function LayoutEffect() {
	const [timer, setTimer] = useState(0)
	const [counter, setCounter] = useState(2)
	const [input, setInput] = useState('')

	const increaseCounter = () => setCounter(st => st * 12)

	const increase = useCallback(increaseCounter, [])



	useEffect(() => {
		console.log('USE EFFECT')
		const timer = setInterval(() => setTimer(st => st + 1), 1000)
		return () => clearInterval(timer)
	}, [])
	


	useLayoutEffect(() => {
		console.log('USE LAYOUT EFFECT - COUNTER')
		
		document.title = input

		if (counter == 0) {
			setCounter(Math.random() * 200)
		}
	}, [counter, input])


  console.log('LAYOUT OR CALLBACK RENDER COMPONENT')

  return (
    <div className="App">
			<Contact />
			<h1>Input - {input}</h1>
			<h1>Timer - {timer}</h1>
			<h1>Counter - {counter}</h1>

			<br/>
			<Multiplier handleIncrease={increase} />
			<button onClick={() => setCounter(st => st + 1)}>Set plus 1</button><br/>
			<input onChange={(e) => setInput(e.target.value)} type='text' />
    </div>
  );
}

export default LayoutEffect;
