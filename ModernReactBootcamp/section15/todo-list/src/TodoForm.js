import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
      evt.preventDefault();
      this.props.addTask(this.state);
      this.setState({
          task: ''
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Task">Task: </label>
          <input
            type="text"
            id="Task"
            name="task"
            value={this.state.task}
            onChange={this.handleInput}
          />
          <button>Add new Task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
