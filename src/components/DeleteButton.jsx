import React from "react";

const DeleteButton = (props) => {
  const { task, onDelete } = props;
  return (
    <div
      className="delete"
      onClick={() => {
        onDelete(task);
      }}
    ></div>
  );
};

export default DeleteButton;
