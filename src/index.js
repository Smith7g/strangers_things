import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getPosts } from "./api";

import { Login } from "./components";
import { Posts } from "./components";
import { Register } from "./components";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <div>
      <Posts />
      <Login />
      <Register />
    </div>
  </BrowserRouter>
);
