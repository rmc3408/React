import React from 'react'
import ClassCounter from './ClassCounter';
import HookArray from './HookArray';
import HookCounter from './HookCounter';
import HookInputState from './HookInputState';
import HookPreviousState from './HookPreviousState';


function UseStatesExamples() {
  return (
    <>
      <hr />
      <HookArray /><hr />
      <HookCounter /><hr />
      <ClassCounter />
      <HookPreviousState /><hr />
      <HookInputState /><hr />
    </>
  )
}

export default UseStatesExamples