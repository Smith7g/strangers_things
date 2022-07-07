import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts">
        <Link to = "/Register" >Don't have account? Sign up here!</Link>
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        {/* <Route exact path="/">
          <Login />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
