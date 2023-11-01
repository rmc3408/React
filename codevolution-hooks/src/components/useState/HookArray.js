import React, { useState } from 'react'

function HookArray() {

  const [items, setItems] = useState([])

  const addItem = () => {
    setItems(st => ([
      ...st,
      { id: st.length, value: Math.floor(Math.random() * 10) }
    ])
    )
  }

  console.log('HOOK ARRAY RENDER COMPONENT')

  return (
    <div>{items.map(item => <h2 key={item.id}>value: {item.value}</h2>)}
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default HookArray