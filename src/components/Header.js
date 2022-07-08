import React, { useState,useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {Profile} from './'

const Header = () => {

  if (Profile){
  return (
    
    <div className="header">
      <Link className="titleMain" to="/Home">Stranger's Things</Link>
      <Link className="navButton" to="/Posts">POSTS</Link>
      <Link className="navButton" to="/Profile">PROFILE</Link>
      <Link className="navButton" to="/Login" onClick={localStorage.clear()}>LOG OUT</Link>
    </div>
  );} else { return (
    <div className="header">
      <Link className="titleMain" to="/Home">Stranger's Things</Link>
      <Link className="navButton" to="/Posts">POSTS</Link>
      <Link className="navButton" to="/Login">LOGIN</Link>

    </div>
    )
  }
};

export default Header;
