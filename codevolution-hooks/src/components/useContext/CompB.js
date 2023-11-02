import React from 'react'
import CompC from './CompC'

function CompB() {

  console.log('COMPONENT B RENDER')
  return <div><CompC /></div>
}

export default CompB