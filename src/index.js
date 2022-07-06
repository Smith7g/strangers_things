import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {getPosts} from './api'


import { App } from "./components";
import {Posts} from "./components";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
  <div>
    <App />
    <Posts />
  </div>
  </BrowserRouter>
);
