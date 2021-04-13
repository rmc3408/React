import React from 'react'
import {
    Paper,
    TextField
} from "@material-ui/core";
import useForm from './useForm';
  
function TodoForm(props) {
    const { addTodo } = props;
    const [ input, changeInput, cleanInput ] = useForm('hello');

    return (
        <Paper style={{ margin: "1rem 0", padding: "2rem 2rem 8px " }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(input);
                cleanInput();
            }} >
                <TextField value={input} onChange={changeInput} />
                
            </form>
            
        </Paper>
    )
}

export default TodoForm
