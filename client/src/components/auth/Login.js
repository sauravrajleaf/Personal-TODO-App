import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login user");
  };
  return (
    // eslint-disable-next-line no-unreachable
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" value={email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
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
