import React, { useState, useEffect } from 'react'

function OnceRender() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')


  // RUNS AFTER RENDER
  useEffect(() => {
    console.log('HOOK USE EFFECT COMPONENT')
    document.title = `hooked ${count} times`
  }, // eslint-disable-next-line
  []) // RUNS ONLY ONCE 
  // null // RUNS EVERY RENDER 
  // [count] // ONLY IF VALUE OF COUNT CHANGES

  const handleInput = (e) => {
    setName(e.target.value)
  }

  console.log('HOOK RENDER COMPONENT')

  return (
    <div>
      <h1>Counter {count}</h1>
      <input type="text" value={name} onChange={handleInput} />
      <button onClick={() => setCount(st => st + 1)}>Add</button>
    </div>
  )
}

export default OnceRender