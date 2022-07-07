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
    <Routes>
        <Route path="/Posts" element={<Posts />}/>
        <Route path="/Register" element={<Register />}/>
        <Route exact path="/" element={<Login />}/>
    </Routes>
  </BrowserRouter>
);
