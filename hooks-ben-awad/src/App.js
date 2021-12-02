import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';
import './App.css';
import Hellos from './Hellos';

function App() {
  const [count, setcount] = useState(JSON.parse(localStorage.getItem('count')) | 8);
  const [{ count2, total }, setcount2] = useState({ count2: 10, total: 20 });
  const emailRef = useRef();

  // Use Custom Hooks
  //const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useForm({ email: '', password: '' });

  console.log("Render App");

  useEffect(() => {
    console.log('Render in effect 01 - old ComponentDIDMount')
    return () => {
      console.log('unmount old value');
    }
  }, [formData.email]);

  useEffect(() => {
    console.log('render in effect 02');
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  useLayoutEffect(() => {
    console.log('Use Layout trigger after render and BEFORE useEffect')
    console.log(emailRef.current.getBoundingClientRect())
  }, [])

  const Fdata = useFetch(`http://numbersapi.com/${count}`);

  return (
    <div className="App">
      <h1>Count simple number: {count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <hr />

      <h1>Count object {count2}</h1>
      <h1>Count Total {total}</h1>
      {/* GIVE ERROR <button onClick={() => setcount2(count2 + 1)}>+</button> */}
      <button onClick={() => setcount2((prevSt) => ({ ...prevSt, count2: prevSt.count2 + 2}))}>Add 2 to count2</button>
      <hr />

      {/* MAKE CUSTOM HOOKS
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
      <input type="email" ref={emailRef} name="email" value={formData.email} onChange={setFormData} />
      <input type="password" name="password" value={formData.password} onChange={setFormData} />
      <button onClick={()=> emailRef.current.focus() }>FOCUS</button>
      
      <hr />
      {!Fdata.loading && <h2>{Fdata.data}</h2>}

      <hr />
      <Hellos num={count2} />

      <hr />

    </div>
  );
}

export default App;
