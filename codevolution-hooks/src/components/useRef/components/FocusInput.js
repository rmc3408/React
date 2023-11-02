import React, { useRef, useEffect } from 'react'

function FocusInput() {

	const inputRef = useRef()

	useEffect(() => {
		console.log('USE EFFECT', inputRef.current)
		inputRef.current.focus()
  }, [])

	console.log('COMPONENT FOCUS RENDER', inputRef.current)

	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput