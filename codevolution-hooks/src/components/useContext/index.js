import React from 'react'
import StoreProvider from './store'
import CompA from './CompA'
import CompX from './CompX'

function UseContextExamples() {
  return (
  <StoreProvider>
        <CompA />
        <CompX />
  </StoreProvider>
  )
}

export default UseContextExamples