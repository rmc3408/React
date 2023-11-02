import React, { Component, useState, useEffect, useRef } from 'react'


function Timer() {
  const intervalRef = useRef()
  const [ timer, setTimer ] = useState(0)

  useEffect(() => {

    intervalRef.current = setInterval(() => {
      setTimer(st => st + 1 )
    }, 1000)
  
    console.log('USE EFFECT + REF', intervalRef.current)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  
  console.log('COMPONENT TIMER RENDER', intervalRef.current)
  return (
    <>
      <h1>Hook Timer - {timer} </h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear</button>
    </>
  )
}

export default Timer



// export default class Timer extends Component {
  
//   interval

//   constructor(props) {
//     super(props)

//     this.state = {
//       timer: 0
//     }
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState(st => ({ timer: st.timer + 1 }) )
//     }, 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval)
//   }

//   render() {
//     return (
//       <>
//       <h1>Class Timer - {this.state.timer} </h1>
//       <button onClick={() => clearInterval(this.interval)}>Clear</button>
//       </>
//     )
//   }
// }
