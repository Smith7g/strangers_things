import React, { useState, useEffect } from "react";
import {handleSubmit, userNameChange, passwordChange} from '../api';
// import { registerPerson } from '../api'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Log In</h1>
      <form
        id="loginForm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="username"
          placeholder="UserName"
          required={true}
          minLength="1"
          onChange={userNameChange}
          value = {username}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          required={true}
          minLength="8"
          onChange={passwordChange}
          value = {password}
        />
        <button type="submit">Log In</button>
      </form>
      <a href="#">Click here to Register!</a>
    </div>
  );
};

export default Login;
