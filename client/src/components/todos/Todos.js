import React, { useReducer, useContext, Fragment } from "react";

import TodoItem from "./TodoItem";

import TodoContext from "../../context /todo/todoContext";

const Todos = () => {
  const todoContext = useContext(TodoContext);

  const { todos } = todoContext;

  return (
    <Fragment>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </Fragment>
  );
};

export default Todos;
