import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  const { todo_data } = todo;

  return (
    <div>
      <h3>{todo_data}</h3>
      <p>
        <button>Edit</button>
        <button>Delete</button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
