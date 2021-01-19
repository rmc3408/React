import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { task: 'hello', id: uuidv4() },
            ],
        };
        this.addTask = this.addTask.bind(this);
    }
    addTask(theTask) {
        console.log(theTask);
    }


    render() {
        
        return (
            <div>
                <ul>
                    { this.state.todos.map(t => <li><Todo note={t.task} /></li>) }
                </ul>
                <TodoForm />
            </div>
        )
    }
}

export default TodoList;
