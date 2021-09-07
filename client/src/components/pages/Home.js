import React from "react";

import Todos from "../todos/Todos";
import TodoForm from "../todos/TodoForm";

const Home = () => {
  return (
    <div>
      <TodoForm />
      <Todos />
    </div>
  );
};

export default Home;
