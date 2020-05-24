import React, { Component } from "react";
import TodoList from "./TodoList";

class Todo extends Component {
  state = {
    text: "",
    tasks: [
      { id: 1, text: "Book a flight to Moscow, Russia", completed: false },
    ],
  };

  render() {
    let { tasks, text } = this.state;
    return (
      <div className="row">
        <div className="col-xs-12">
          <TodoList tasks={tasks} onComplete={this.handleComplete} />
        </div>
        <div className="col-xs-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group input-group">
              <input
                type="text"
                className="form-control"
                placeholder="What needs to be done?"
                onChange={this.handleChange}
                value={text}
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  Add a Task
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Handles addition of new task
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === "") return;

    // Create a new task
    const newTask = {
      id: Math.floor(Date.now() / 1000),
      text: this.state.text,
      completed: false,
    };

    // Add this task into the tasks array
    this.setState({ tasks: this.state.tasks.concat(newTask) });

    // Now, clear the input text
    this.setState({ text: "" });
  };

  // Handles text box change
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  // Handles task status toggling
  handleComplete = (task) => {
    let tasks = [...this.state.tasks];
    let index = tasks.indexOf(task);
    tasks[index] = { ...task };
    tasks[index].completed = !task.completed;
    this.setState({ tasks });
  };
}

export default Todo;
