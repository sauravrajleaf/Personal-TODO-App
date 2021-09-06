import React, { useReducer } from "react";
import uuid from "uuid";
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
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //ADD_TODO

  //DELETE_TODO

  //UPDATE_TODO

  //SET_CURRENT TODO

  //CLEAR_CURRENT TODO

  //FILER_TODO

  //CLEAR_FILTER

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;