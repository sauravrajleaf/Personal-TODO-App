import React, { useContext } from "react";
import PropTypes from "prop-types";

import TodoContext from "../../context /todo/todoContext";

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);

  const { deleteTodo } = todoContext;

  const { id, todo_data } = todo;

  const onDelete = () => {
    deleteTodo(id);
  };

  return (
    <div>
      <h3>{todo_data}</h3>
      <p>
        <button>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
