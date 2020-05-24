import React, { Component } from "react";

class TodoList extends Component {
  state = {};
  render() {
    let { tasks, onComplete } = this.props;
    return (
      <div className="list-tasks">
        {tasks.map((task) => (
          <div className={this.getListItemClasses(task)} key={task.id}>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                onChange={() => onComplete(task)}
                checked={task.completed}
                id={task.id}
              />
            </div>
            <label className="list-text" htmlFor={task.id}>
              {task.text}
            </label>
          </div>
        ))}
      </div>
    );
  }

  getListItemClasses(task) {
    let classes = "list-item";
    classes += task.completed ? " completed" : "";
    return classes;
  }
}

export default TodoList;
