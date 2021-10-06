import React, { useContext, useEffect } from "react";

import Todos from "../todos/Todos";
import TodoForm from "../todos/TodoForm";

import AuthContext from "../../context /auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <TodoForm />
      <Todos />
    </div>
  );
};

export default Home;
