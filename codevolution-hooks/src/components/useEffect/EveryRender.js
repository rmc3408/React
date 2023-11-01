import React, { useState, useEffect } from 'react'

function EveryRender() {
  const [count, setCount] = useState(0)

  // RUNS AFTER RENDER
  useEffect(() => {
    console.log('HOOK USE EFFECT COMPONENT')
    document.title = `hooked ${count} times`
  }
  // ,null // RUNS EVERYTIME
  )


  console.log('HOOK RENDER COMPONENT')
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(st => st + 1)}>Add</button>
    </div>
  )
}

export default EveryRender