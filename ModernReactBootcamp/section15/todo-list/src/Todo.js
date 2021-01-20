import React, { Component } from "react";
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };

    this.eliminatorTask = this.eliminatorTask.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.confirmationEdit = this.confirmationEdit.bind(this);
    this.closeTask = this.closeTask.bind(this);
  }

  eliminatorTask() {
    this.props.removeTask(this.props.id);
  }

  handleChanges(evt) {
    this.props.changeTask(evt.target.value, this.props.id);
  }
  handleEdit() {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  }
  confirmationEdit() {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  }
  closeTask() {
    this.props.completeTask(this.props.id);
  }

  render() {
    const TodosList = (
      <div className='Todo'>
        <li
          className={this.props.isDone ? "Todo-task completed" : "Todo-task"}
          onClick={this.closeTask}
        >
          {this.props.note}
        </li>
        <div className='Todo-buttons'>
        <button onClick={this.handleEdit}><i class='fas fa-pen' /></button>
          <button onClick={this.eliminatorTask}><i class='fas fa-trash' /></button>
        </div>
      </div>
    );

    const editingTask = (
      <div className='Todo'>
        <div className='Todo-edit-form'>
        <input
          type="text"
          value={this.props.note}
          onChange={this.handleChanges}
        />
          <button onClick={this.confirmationEdit}>Confirm</button>
        </div>
      </div>
    );

    return <div>{this.state.isToggled ? editingTask : TodosList}</div>;
  }
}

export default Todo;
