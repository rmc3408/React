import React, { useContext } from 'react'
import { CountContext } from '../storeOne'


function Three() {
  const counter = useContext(CountContext)

  console.log('COMPONENT ONE RENDER')
  return (
    <div style={{ border: '2px solid gray '}}>
      <h1>{counter.countState}</h1>
      <button onClick={() => counter.countDispatch('increment')}>Add + 1</button>
      <button onClick={() => counter.countDispatch('decrement')}>Substract - 1</button>
      <button onClick={() => counter.countDispatch('reset')}>reset</button>
      <h1>{counter.total}</h1>
      <button onClick={() => counter.totalDispatch('increment')}>Add + 1</button>
      <button onClick={() => counter.totalDispatch('decrement')}>Substract - 1</button>
      <button onClick={() => counter.totalDispatch('reset')}>reset</button>
    </div>
  )
}

export default Three