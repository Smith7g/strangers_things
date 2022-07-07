import React, { useState } from "react";
import { handleSubmit, userNameChange, passwordChange } from "../api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (!password === confirmPassword) {
        return error
    }
  };

  return (
    <>
      <h1>Registration</h1>
      <form id="loginForm">
        <input
          type="text"
          name="username"
          placeholder="UserName"
          required={true}
          minLength="1"
          onChange={userNameChange}
          value={username}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          required={true}
          minLength="8"
          onChange={passwordChange}
          value={password}
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
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Register;
