import React, { useState, useContext, useEffect } from "react";

import TodoContext from "../../context /todo/todoContext";

const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const { addTodo, clearCurrent, updateTodo, current } = todoContext;
  const [todo, setTodos] = useState({
    id: "",
    user: "",
    todo_data: "",
  });

  const { id, user, todo_data } = todo;

  useEffect(() => {
    if (current) {
      setTodos(current);
    } else {
      setTodos({
        id: "",
        user: "",
        todo_data: "",
      });
    }
  }, [todoContext, current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(todo_data);
    if (!current) {
      addTodo(todo);
    } else {
      updateTodo(todo);
    }
    clearAll();
  };

  const onChange = (e) => {
    setTodos({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const clearAll = () => {
    clearCurrent();
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
      <button className="todo-button">
        {current ? "Update Todo" : "Add Todo"}
      </button>
      {current && (
        <div>
          <button onClick={clearAll}>Cancel</button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
