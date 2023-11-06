import './App.css';
import { useState, useEffect, useTransition } from 'react';


function TransitionExample99() {
	const [input, setInput] = useState('')
	const [pokemons, setPokemons] = useState([])
	
	const [filteredPokes, setFilteredPokes] = useState([])
	const [isPending, startTransition] = useTransition();


	useEffect(() => {
		async function getPoke() {
			const res = await fetch('https://pokeapi.co/api/v2/pokemon')
			const data = await res.json()
			setPokemons(data.results)
		}
		console.log('USE EFFECT RENDER')
		getPoke()
	}, [])
	
	const handleInput = ({ target: { value } }) => {

		setInput(value.toLowerCase())
		
		startTransition(() => {
			setFilteredPokes(pokemons.filter((item) => item.name.includes(input)) )
		})
	}

  console.log('APP RENDER COMPONENT', isPending, filteredPokes, pokemons)

	//const filteredPokes = pokemons.filter((item) => item.name.includes(input))

  return (
    <div className="App">
			
			{ isPending && "LOADING..."}

			<h1>Input - {input}</h1>
			<input onChange={handleInput} type='text' />

			{filteredPokes.map(pokemon => {
				return (<p key={pokemon.url}>{pokemon.name}</p>)
			})}
			
    </div>
  );
}

export default TransitionExample99;
