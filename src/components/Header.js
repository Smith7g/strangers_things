import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Header;
