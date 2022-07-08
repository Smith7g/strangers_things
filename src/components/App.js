import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts, Register, Login, Profile, Header, Home } from "./";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
      <Routes>
        <Route path="/Home" element={<Home loggedIn = {loggedIn}/>} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Login setLoggedIn = {setLoggedIn}/>} />
      </Routes>
    </div>
  );
};

export default App;
