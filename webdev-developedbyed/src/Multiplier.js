import React from 'react'

function Multiplier({handleIncrease}) {

  console.log('MULTIPLIER RENDER COMPONENT')
  return (
    <button onClick={handleIncrease}>Multiply by 125</button>
  )
}

export default React.memo(Multiplier)