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

const Todolist = (props) => {
  const edition = (task) => <EditTodoForm edit={props.edit} value={task} />;
  return (
    <Paper>
      <List> 
        {props.todos.map((p) => (
          <div key={p.id}>
            <ListItem>
                    <Checkbox checked={p.completed} onClick={()=> props.toggle(p.id)} />
                    <ListItemText style={{ textDecoration: p.completed? 'line-through' : 'none'}}>{p.task}</ListItemText>
              <Button variant="contained" color="secondary" onClick={() => props.removal(p.id)}>delete</Button>
              <Button variant="contained" color="danger" margin='1em' onClick={edition(p.task)}>edit</Button>

            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default Todolist;
