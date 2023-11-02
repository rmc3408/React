import React, { useContext } from 'react'
import { ChannelContext } from './store'

function CompY() {
  const pub = useContext(ChannelContext)
  console.log('COMPONENT Y RENDER')

  return <div>
    <h1>Channel is {pub.channel}</h1>
    </div>
}

export default CompY