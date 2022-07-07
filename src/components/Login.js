import React, { useState, useEffect } from "react";
import {handleSubmit, userNameChange, passwordChange} from '../api';
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="login">
      <h1 className = "title">Log In</h1>
      <form
        id="loginForm"
        onSubmit={handleSubmit}
      >
        <div className = "boxes">
        <input className = "input"
          type="text"
          name="username"
          placeholder="UserName"
          required={true}
          minLength="1"
          onChange={userNameChange}
          value = {username}
        />
        <input className ="input"
          type="text"
          name="password"
          placeholder="Password"
          required={true}
          minLength="8"
          onChange={passwordChange}
          value = {password}
        />
        <button type="submit">Log In</button>
        </div>
      </form>
      <Link to = "/Register" >Don't have account? Sign up here!</Link>
    </div>
  );
};

export default Login;
