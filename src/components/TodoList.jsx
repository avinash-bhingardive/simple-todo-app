import React, { Component } from "react";
import DeleteButton from "./DeleteButton";

class TodoList extends Component {
  state = {};
  render() {
    let { tasks, onComplete, onDelete } = this.props;
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
            <DeleteButton task={task} onDelete={() => onDelete(task)} />
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
