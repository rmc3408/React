import React, { useState } from 'react'
import CleanUP from './CleanUp'

function CleanerContainer() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <CleanUP />}
		</div>
	)
}

export default CleanerContainer