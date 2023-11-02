import React, { useState, useMemo } from 'react'

function UseMemoExamples() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

  function isEven() {
    let count = 0
    while (count < 1200000000) count++
    console.log('calculation is done')
    return counterOne % 2 === 0
  }

  const Even = useMemo(isEven, [counterOne]) // Executes function and cache their result

	return (
		<div>
      {/* <h1>{isEven() ? 'Even' : 'Odd'}</h1> */}
      <h1>{Even ? 'Even' : 'Odd'}</h1>
			<div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
			</div>
			<div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default UseMemoExamples