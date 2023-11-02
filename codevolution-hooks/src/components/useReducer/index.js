import React from 'react'
import StoreOneProvider from './storeOne'
import One from './components/One'
import Two from './components/Two'
import StoreTwoProvider from './storeTwo'


function UseReducerExamples() {
  return (
    <>
      <StoreOneProvider><One /></StoreOneProvider>
      <StoreTwoProvider><Two /></StoreTwoProvider> 
    </>
    
  )
}

export default UseReducerExamples