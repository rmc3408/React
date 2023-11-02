import React, { useContext } from 'react'
import { CountContext } from '../storeTwo'


function Two() {
  const counter = useContext(CountContext)

  console.log('COMPONENT TWO RENDER');

  return (
    <div>
      <h1>First Counter = {counter.count.first}</h1>
      <h1>Second Counter = {counter.count.second}</h1>
      <br/>
      <button onClick={() => counter.countFn({ type: 'increment', value: 1 })}>Add + 1</button>
      <button onClick={() => counter.countFn({ type: 'decrement', value: 1 })}>Substract - 1</button>
      <br/>
      <button onClick={() => counter.countFn({ type: 'increment2', value: 3 })}>Add triple</button>
      <button onClick={() => counter.countFn({ type: 'decrement2', value: 5 })}>Substract 5 times</button>
      <br/>
      <button onClick={() => counter.countFn({ type: 'reset' })}>reset</button>
    </div>
  )
}

export default Two