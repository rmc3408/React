import React, { useState } from 'react'

function MyFormHooks() {
    const [email, setEmail] = useState('wow');

    const handEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <h1>The value is {email}</h1>
            <input type='text' value={email} onChange={handEmail} />
            <button onClick={()=> {setEmail('')}}>clear</button>
        </div>
    )
}

export default MyFormHooks
