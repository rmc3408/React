import { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import Todolist from "./Todolist";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "Clean tank", completed: false },
    { id: uuidv4(), task: "Feed the fish", completed: true },
  ]);

  const addTodo = (newTask) => {
    setTodos([...todos, { id: uuidv4(), task: newTask, completed: false }]);
  };
  const removeTodo = id => {
    const newlist = todos.filter(p => p.id !== id);
    setTodos([...newlist]);
  }
  const toggleTodo = id => {
    const newtodo = todos.map(note => note.id === id ? { ...note, completed: !note.completed } : note);
    setTodos(newtodo);
  
  }
  const editTodo = (id, newtask) => {
    const newtodo = todos.map(note => note.id === id ? { ...note, task: newtask } : note);
    setTodos(newtodo);
  }

  const paperStyle = {
    padding: "0",
    margin: "0",
    height: "100vh",
    backgroundColor: "lightblue",
  };

  return (
    <Paper style={paperStyle} elevation={0}>
      <AppBar
        color="primary"
        position="static"
        style={{ paddingLeft: "40px", textAlign: "left", height: "60px" }}
      >
        <Toolbar>
          <Typography color="inherit">ToDo App running...</Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <Todolist todos={todos} removal={removeTodo} toggle={toggleTodo} edit={editTodo} />
        </Grid>
      </Grid>
      
    </Paper>
  );
}

export default TodoApp;
