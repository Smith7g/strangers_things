import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="titleMain" to="/">Stranger's Things</Link>
      <Link className="navButton" to="/Posts">POSTS</Link>
      <Link className="navButton" to="/">LOGIN</Link>
    </div>
  );
};

export default Header;
