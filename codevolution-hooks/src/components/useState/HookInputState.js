import React, { useState } from 'react'

function HookInputState() {
  const [name, setName] = useState({ first: '', last: '' })

  console.log('HOOK INPUT RENDER COMPONENT')
  
  const handleInput = (e) => {
    setName(st => ({ ...st, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <h1>First Name {name.first}</h1>
      <h1>Last Name {name.last}</h1>
      <input type="text" name='first' value={name.first} onChange={handleInput} />
      <input type="text" name='last' value={name.last} onChange={handleInput} />
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookInputState