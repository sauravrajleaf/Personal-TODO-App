import React, { useState, useContext } from "react";

import TodoContext from "../../context /todo/todoContext";

const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const [todo, setTodos] = useState({
    id: "",
    user: "",
    todo_data: "",
  });

  const { id, user, todo_data } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(todo_data);
    todoContext.addTodo(todo);
    setTodos({
      id: "",
      user: "",
      todo_data: "",
    });
  };

  const onChange = (e) => {
    setTodos({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Add a todo"
        name="todo_data"
        value={todo_data}
        onChange={onChange}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
