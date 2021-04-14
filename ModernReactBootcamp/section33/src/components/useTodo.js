import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useTodo = i => {
  const [todos, setTodos] = useState(i);

    return {
        todos,
        addTodo: (newTask) => {
            setTodos([...todos, { id: uuidv4(), task: newTask, completed: false }]);
        },
        removeTodo: (id) => {
            const newlist = todos.filter((p) => p.id !== id);
            setTodos([...newlist]);
        },
        toggleTodo: (id) => {
            const newtodo = todos.map((note) =>
              note.id === id ? { ...note, completed: !note.completed } : note
            );
            setTodos(newtodo);
        },
        editTodo: (id, newtask) => {
            const newtodo = todos.map((note) =>
              note.id === id ? { ...note, task: newtask } : note
            );
            setTodos(newtodo);
        }
    };
}

export default useTodo;