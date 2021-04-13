import React from 'react'
import useForm from './useForm';
import {
    TextField
  } from "@material-ui/core";

function EditTodoForm() {
    const [value, handleChange, reset] = useForm('');
    return (
        <div>
            <TextField margin='normal' value={value} onChange={handleChange} />
        </div>
    )
}

export default EditTodoForm
