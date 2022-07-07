import React from 'react'
import { registerPerson} from '../api';

const Register = ({username,setUsername,password, setPassword,setConfirmPassword,confirmPassword}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    
    if (password !== confirmPassword) {
      alert("Password don't match.")
  } else {
    registerPerson(event);
    setUsername(" ");
    setPassword(" ");
    setConfirmPassword(" ");
    };
  };
  const userNameChange = (event) => {
    setUsername(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  
  return (
    <div id="login">
      <h1 className='title'>Registration</h1>
      <form id="loginForm" onSubmit={handleSubmit} >
      <div className = "boxes">
        <input className = "input"
          type="text"
          name="username"
          placeholder="UserName"
          required={true}
          minLength="1"
          onChange={userNameChange }
          value={username}
        />
        <input className = "input"
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          minLength="8"
          onChange={passwordChange}
          value={password}
        />
        <input className = "input"
          type="password"
          name="confirm password"
          placeholder="Confirm Password"
          required={true}
          minLength="8"
          onChange={confirmPasswordChange}
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
