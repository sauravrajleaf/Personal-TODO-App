import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//IMPORTING COMPONENTS
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

//IMPORTING STATE
import TodoState from "./context /todo/TodoState";
import AuthState from "./context /auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <TodoState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </TodoState>
    </AuthState>
  );
};

export default App;
