import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts, Register, Login, Profile, Header, Home,Add,UserPost } from "./";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
      <Routes>
        <Route path="/Home" element={<Home loggedIn = {loggedIn}/>} />
        <Route path="/Posts" element={<Posts loggedIn = {loggedIn}/>} />
        <Route path="/Add" element={<Add loggedIn = {loggedIn}/>} />
        <Route path="/UserPost" element={<UserPost loggedIn = {loggedIn}/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Login setLoggedIn = {setLoggedIn}/>} />
      </Routes>
    </div>
  );
};

export default App;
