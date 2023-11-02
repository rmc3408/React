import React, { useContext } from 'react'
import { UserContext } from './store'

function CompC() {
	const user = useContext(UserContext)

	console.log('COMPONENT C RENDER')

	return <>
		<button onClick={() => user.setUserName('Raph')}>Raph</button>
		<button onClick={() => user.setUserName('Jason')}>Jason</button>
		<h1>{JSON.stringify(user)}</h1>
	</>
}

export default CompC