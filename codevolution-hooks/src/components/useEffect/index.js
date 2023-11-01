import React from 'react'
import DataFetching from './Fetching'
import ClassDidMountDidUpdate from './ClassDidMountDidUpdate'
import EveryRender from './EveryRender'
import OnceRender from './OnceRender'
import DependentOne from './DependentOne'
import ClassDidMountDidUnmout from './ClassDidMountDidUnmout'
import CleanerContainer from './CleanerContainer'
import ClassInterval from './ClassInterval'
import Interval from './Interval'

function UseEffectExamples() {
  return (
    <>
      <ClassDidMountDidUpdate /><hr /> 
      <EveryRender /> <hr />
      <OnceRender /><hr />
      <DependentOne /><hr />
      <ClassDidMountDidUnmout /><hr />
      <CleanerContainer /><hr />
      <ClassInterval /><hr />
      <Interval /><hr />
      <DataFetching /><hr />
    </>
  )
}

export default UseEffectExamples