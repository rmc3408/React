import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { task: 'hello', id: uuidv4(), completed: false },
            ],
        };
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.editingTask = this.editingTask.bind(this);
        this.changeCompleted = this.changeCompleted.bind(this);

    }
    addTask(theTask) {
        //console.log(theTask);
        const newTodo = { ...theTask, id: uuidv4(), completed: false };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    removeTask(id) {
        const newTodos = this.state.todos.filter(t => t.id !== id);
        //console.log(newTodos);
        this.setState({
            todos : newTodos
        });
    }
    editingTask(note, id) {
        let theTask = this.state.todos.find(t => t.id === id);
        theTask.task = note;
        const index = this.state.todos.findIndex(x => x.id === id);
        this.state.todos.splice(index, 1, theTask)
        this.setState({
            todos: this.state.todos
        });
        
    }
    changeCompleted(id) {
        let theTask = this.state.todos.find(t => t.id === id);
        theTask.completed = !theTask.completed;
        const index = this.state.todos.findIndex(x => x.id === id);
        this.state.todos.splice(index, 1, theTask)
        this.setState({
            todos: this.state.todos
        });       
    }
    

    render() {
        
        return (
            <div>
                <ul>
                    {this.state.todos.map(t => <Todo
                        note={t.task}
                        id={t.id}
                        removeTask={this.removeTask}
                        changeTask={this.editingTask}
                        completeTask={this.changeCompleted}
                        isDone={t.completed}
                        key={t.id}
                    />)}
                </ul>
                <TodoForm addTask={this.addTask} />
            </div>
        )
    }
}

export default TodoList;
