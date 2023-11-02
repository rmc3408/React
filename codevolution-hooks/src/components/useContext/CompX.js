import React, { useContext } from 'react'
import CompY from './CompY'
import { ChannelContext } from './store'

function CompX() {
  const pub = useContext(ChannelContext)
  console.log('COMPONENT X RENDER')

  return <div>
    <button onClick={() => pub.setIncrementChannel()}>Add</button>
    <CompY />
    </div>
}

export default CompX