import React, { useState, useContext, useEffect } from "react";

import AuthContext from "../../context /auth/authContext";

const Register = () => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const { register, error, clearErrors } = authContext;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    if (error === "User alread exists") {
      console.log("User alread exists");
      clearErrors();
    }
  }, [error]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Passwords don't Match");
    } else {
      register({
        name,
        email,
        password,
      });
      console.log("Register submitted");
    }
  };
  return (
    // eslint-disable-next-line no-unreachable
    <div>
      <h1>Register Account</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
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
        <div>
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <button type="submit" value="register">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
