import React, { useContext } from 'react'
import { CountContext } from '../storeOne'


function One() {
  const counter = useContext(CountContext)

  console.log('COMPONENT ONE RENDER')
  return (
    <div>
      <h1>{counter.countState}</h1>
      <button onClick={() => counter.countDispatch('increment')}>Add + 1</button>
      <button onClick={() => counter.countDispatch('decrement')}>Substract - 1</button>
      <button onClick={() => counter.countDispatch('reset')}>reset</button>
    </div>
  )
}

export default One