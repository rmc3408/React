import { useEffect } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import Todolist from "./Todolist";
import TodoForm from "./TodoForm";
import useTodo from './useTodo';

function TodoApp() {

  const initialList = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodo(initialList) 

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

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
