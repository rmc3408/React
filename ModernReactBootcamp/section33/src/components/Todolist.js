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

const Todolist = (props) => {
  return (
    <Paper>
      <List>
        {props.todos.map((p) => (
          <div key={p.id}>
            <ListItem>
                    <Checkbox checked={p.completed} />
                    <ListItemText style={{ textDecoration: p.completed? 'line-through' : 'none'}}>{p.task}</ListItemText>
              <Button variant="contained" color="secondary">delete</Button>
              <Button variant="contained" color="danger" margin='1em'>edit</Button>

            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default Todolist;
