import React from 'react'
import useForm from './useForm';
import {
    TextField
  } from "@material-ui/core";

function EditTodoForm({ task, edit, id }) {
    const [value, handleChange, reset] = useForm(task);
    return (
        <form onSubmit={(e) => {
            //e.preventDefault();
            edit(id, value);
            reset();
        }}> 
            <TextField margin='normal' value={value} onChange={handleChange} fullWidth />
        </form>
    )
}

export default EditTodoForm
