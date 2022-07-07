import React from 'react'

const Register = ({username,setUsername,password, setPassword,setConfirmPassword,confirmPassword}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    setUsername(" ");
    setPassword(" ");
  };
  const userNameChange = (event) => {
    setUsername(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (!password === confirmPassword) {
        return error
    }
  };
  
  return (
    <>
      <h1>Registration</h1>
      <form id="loginForm" onSubmit={handleSubmit} >
        <input
          type="text"
          name="username"
          placeholder="UserName"
          required={true}
          minLength="1"
          onChange={userNameChange }
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
