import React from "react";

import Todos from "../todos/Todos";
import TodoForm from "../todos/TodoForm";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <TodoForm />
      <Todos />
    </div>
  );
};

export default Home;
