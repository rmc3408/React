import React, { useContext } from 'react'
import CompB from './CompB'
import { UserContext } from './store'

function CompA() {
  const user = useContext(UserContext)
  console.log('COMPONENT A RENDER')

  return <div>
    <button onClick={() => user.setUserName(user.userName.toUpperCase())}>CAPITALIZE</button>
    <CompB />
    </div>
}

export default CompA