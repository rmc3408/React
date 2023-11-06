import React, { useState, useEffect, useTransition, Suspense } from 'react';

const TransitionExample3 = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([])
  const [isPending, startTransition] = useTransition();
  const LISTSIZE = 26000

  function handlechange({ target: { value } }) {
    setInput(st => {
      console.log('INSIDE INPUT CHANGE');
      return value
    })
    startTransition(() => {
      const l = []
      console.log('INSIDE TRANSATION')
      for (let i = 0; i < LISTSIZE; i++) {
        l.push(value)
      }
      setList(l)
    })

  }

  console.log('TRANSITION 3 RENDER', isPending)
  return (
    <>
      <h1>List of Web Dev Simplified</h1>
      <input onChange={handlechange} type='text' value={input} />
      {isPending && "...LOADING..."}
      {list.map((item, idx) => {
        return (<p key={idx}>{item}</p>)
      })}
    </>
  );
};

export default TransitionExample3;