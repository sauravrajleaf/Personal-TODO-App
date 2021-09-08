import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //LOAD USER - CHECKS WHICH USER IS LOGGED IN & HITS THAT AUTH ENDPOINT

  //REGISTER USER

  //LOGIN USER - LOGS THE USER IN & GETS THE TOKEN

  //LOGOUT -  LOGS OUT & DESTROYS THE TOKEN & CLEARS EVERYTHING

  // CLEAR ERRORS - CLEARS ANY ERRORS IN STATE

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        laoding: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
