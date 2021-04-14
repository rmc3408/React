import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Checkbox
} from "@material-ui/core";
import React from "react";
import EditTodoForm from './EditTodoForm';
import useToogle from './useToggle';

const Todolist = (props) => {
  const [isEdit, toggleEdit] = useToogle();

  return (
    <Paper>
      <List> 
        {props.todos.map((p) => (
          <div key={p.id}>
            {isEdit ? <EditTodoForm edit={props.edit} task={p.task} id={p.id} /> : (<>
            <ListItem>
              <Checkbox checked={p.completed} onClick={() => props.toggle(p.id)} />
              <ListItemText style={{ textDecoration: p.completed ? 'line-through' : 'none' }}>{p.task}</ListItemText>
              <Button variant="contained" color="secondary" onClick={() => props.removal(p.id)}>delete</Button>
              <Button variant="contained" color="primary" onClick={toggleEdit} >edit</Button>

            </ListItem>
            <Divider />
            </>)}
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default Todolist;
