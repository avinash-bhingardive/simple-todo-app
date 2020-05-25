import React from "react";

const AddTask = (props) => {
  const { onSubmit, onChange, text } = props;
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group input-group">
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done?"
          onChange={onChange}
          value={text}
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">
            Add a Task
          </button>
        </span>
      </div>
    </form>
  );
};

export default AddTask;
