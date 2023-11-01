import React, { useState } from 'react'

function HookPreviousState() {
  const initialValue = 0
  const [count, setCount] = useState(initialValue)

  console.log('HOOK PREVIOUS STATE RENDER COMPONENT')
  
  const incrementByFour = () => {
    //This does NOT WORK. it will re-render once, only uses LAST Call to udate state !
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 2)

    // If call previous state, it will re-render once, but update state every call.
    setCount(st => st + 1)
    setCount(st => st + 2)
    setCount(st => st + 1)
  }

  return (
    <div>
      <h1>Counter {count}</h1>
       <button onClick={() => setCount(initialValue)}>Reset</button>
       <button onClick={() => setCount(st => st - 1)}>Remove </button>
       <button onClick={() => setCount(st => st + 1)}>Add</button>
       {/* WORKS TOO, not best practice <button onClick={() => setCount(count + 4)}>Add by five</button> */}
       <button onClick={() => incrementByFour()}>Add 4</button>
    </div>
  )
}

export default HookPreviousState