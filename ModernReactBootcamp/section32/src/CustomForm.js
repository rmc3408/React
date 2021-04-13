import React from 'react'
import useInput from './hooks/useForm';

function CustomForm() {

    const [email, changeEmail, resetEmail] = useInput('rmc3408@protonmail.com');
    const [name, changeName, resetName] = useInput('Raphael');

    return (
        <div>
            <h1>The Email value is {email}</h1>
            <input type='text' value={email} onChange={changeEmail} />
            <h1>The Name value is {name}</h1>
            <input type='text' value={name} onChange={changeName} />
            <button onClick={() => {
                resetEmail()
                resetName()
            }}>clear</button>
        </div>
    )
}

export default CustomForm