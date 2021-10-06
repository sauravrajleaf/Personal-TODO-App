import React, { useContext, useState, useEffect } from "react";

import AuthContext from "../../context /auth/authContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { loginUser, isAuthenticated, error, clearErrors } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email,
      password,
    });
  };
  return (
    // eslint-disable-next-line no-unreachable
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" value="login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
