import React, { useState } from "react";
import {handleSubmit, userNameChange, passwordChange} from '../api';
// import Login from "./Login";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  return (
    <>
      <form id="loginForm">
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
        <input
          type="text"
          name="confirm password"
          placeholder="Confirm Password"
          required={true}
          minLength="8"
          onChange={confirmPasswordChange}
          value={confirmPassword}
        />
        <button type="submit">Log In</button>
      </form>
      <a href="#">Click here to Register!</a>
    </>
  );
};

export default Register;
