import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_TODO,
  CLEAR_FILTER,
} from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: [
      {
        id: 1,
        user: "Brad Trav",
        todo_data: "Make biggest youtube channel",
      },
      {
        id: 2,
        user: "Saurav",
        todo_data: "Watch suits",
      },
      {
        id: 3,
        user: "Ankit",
        todo_data: "kam phookunga",
      },
      {
        id: 4,
        user: "Saurav",
        todo_data: "Call maa",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //ADD_TODO
  const addTodo = (todo) => {
    todo.id = uuid();
    dispatch({ type: ADD_TODO, payload: todo });
  };

  //DELETE_TODO
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };
  //UPDATE_TODO
  const updateTodo = (todo) => {
    dispatch({ type: UPDATE_TODO, payload: todo });
  };

  //SET_CURRENT TODO
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //CLEAR_CURRENT TODO
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //CLEAR_FILTER

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        addTodo,
        deleteTodo,
        setCurrent,
        clearCurrent,
        updateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
