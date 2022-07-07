import React, { useState, useEffect } from "react";
// import {handleSubmit, userNameChange, passwordChange} from '../api';
import { Link } from 'react-router-dom'
import { confirmLogin } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginInfo =  await confirmLogin(username,password);
      localStorage.setItem("token", token)
      const token = localStorage.getItem("token")
      console.log(loginInfo, 'this is some info')
      setUsername(" ");
      setPassword(" ");
      
    } catch (error) {
      console.log(error)
    }
  };

  const userNameChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

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
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          minLength="8"
          onChange={passwordChange}
          value = {password}
        />
        <button type="submit" >Log In</button>
        </div>
      </form>
      <Link to = "/Register" >Don't have account? Sign up here!</Link>
    </div>
  );
};

export default Login;
