import React from "react";

const LeftCount = (props) => {
  let { tasks } = props;

  // Get the number of incompleted tasks
  let remaining_tasks = tasks.filter((task) => task.completed !== true).length;

  if (tasks.length === 0) {
    return null;
  } else if (remaining_tasks === 0) {
    return <span className="left-counter">All done!</span>;
  } else {
    return <span className="left-counter">{remaining_tasks} items left</span>;
  }
};

export default LeftCount;
