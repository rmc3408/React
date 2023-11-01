import React, { useState, useEffect } from 'react'

function CleanUP() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		// TWO SET STATE TOGETHER ONLY RE-RENDER ONCE
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('USE EFFECT CALLED ONCE')
    window.addEventListener('mousemove', logMousePosition)

		// REMOVE DEPENDENCIES EVENTS, TIMERS, SUBSCRIPTIONS
    return () => {
      console.log('UNMOUNT EFFECT TRIGERED')
      window.removeEventListener('mousemove', logMousePosition)
    }
	}, [])

  console.log('COMPONENT RENDER')
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default CleanUP