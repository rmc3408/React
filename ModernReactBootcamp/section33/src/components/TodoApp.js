import { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import Todolist from "./Todolist";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Clean tank", completed: false },
    { id: 2, task: "Feed the fish", completed: true },
  ]);

  const addTodo = (newTask) => {
    setTodos([...todos, { id: 4, task: newTask, completed: false }]);
  };

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
          <Todolist todos={todos} />
        </Grid>
      </Grid>
      
    </Paper>
  );
}

export default TodoApp;
