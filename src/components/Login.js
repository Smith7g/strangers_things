import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { confirmLogin } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token =  await confirmLogin(username,password);
      if(token){
      localStorage.setItem("token", token)
      console.log(token, 'this is some info')
      setUsername("");
      setPassword("");
      navigate('/Home')
      } else {
        alert('Incorrect Username or Password')
      }
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
