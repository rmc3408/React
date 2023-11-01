import React, { useState, useEffect } from 'react'

function Interval() {
  const [count, setCount] = useState(0)

  // IN CASE, YOU WANNA MULTIPLE EXECUTION USE PREVIOUS STATE
  //const tick = () => setCount(count + 1) // SAME FUNCTION CALL TWICE ONLY EXECUTE LAST ONCE
  const tick = () => setCount(st => st + 1) // EXECUTE AGAIN IF STATE CHANGE

  // eslint-disable-next-line
  function print() {
    console.log('Counter value is', count)
  }

  useEffect(() => {
    console.log('USE EFFECT CALLED FOR INTERVAL')
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }

  //}, [count]) // TRACK CHANGES OF VALUE, IN CASE, CHANGING STATE TRIGGER RE-RENDER
  }, []) // EXECUTE ONCE, RENDER MADE BY STATE CHANGE 


  useEffect(() => {
    console.log('USE EFFECT CALLED BASED PRINT OR COUNT CHANGE')
    print()

    // TRACK CHANGES OF VARIABLE INSIDE FUNCTION, IN CASE, CHANGING STATE TRIGGER RE-RENDER
  }, [print, count])


  console.log('COMPONENT RENDER')
  return <>
    <h1>{count}</h1>
    <button onClick={tick}>click</button>
  </>
}

export default Interval