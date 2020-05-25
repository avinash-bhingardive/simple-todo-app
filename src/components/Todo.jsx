import React, { Component } from "react";
import TodoList from "./TodoList";
import AddTask from "./AddTask";
import LeftCount from "./LeftCount";
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
          <h2 className="title">todos</h2>
        </div>
        <div className="col-xs-12">
          <TodoList
            tasks={tasks}
            onComplete={this.handleComplete}
            onDelete={this.handleDelete}
          />
        </div>
        <div className="col-xs-12">
          <AddTask
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            text={text}
          />
        </div>
        <div className="col-xs-12">
          <LeftCount tasks={tasks} />
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
      id: Math.floor(Date.now() / 1),
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

  // Handles the deletion of a task
  handleDelete = (task) => {
    let tasks = [...this.state.tasks];
    let index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({ tasks });
    }
  };
}

export default Todo;
