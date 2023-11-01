import React, { useState } from 'react'

function HookCounter() {
  const [count, setCount] = useState(0)

  console.log('HOOK COUNTER RENDER COMPONENT')
  
  return (
    <div>
      <h1>Counter {count}</h1>
       <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  )
}

export default HookCounter