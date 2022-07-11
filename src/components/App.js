import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Posts,
  Register,
  Login,
  Profile,
  Header,
  Home,
  Add,
  UserPost,
  OthersPost,
  Message,
} from "./";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [singlePost, setSinglePost] = useState("");
  const [newMessage, setNewMessage] = useState("");

  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Message singlePost={singlePost} newMessage={newMessage} />
      <Routes>
        <Route path="/Home" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/Posts"
          element={
            <Posts
              loggedIn={loggedIn}
              singlePost={singlePost}
              setSinglePost={setSinglePost}
            />
          }
        />
        <Route path="/Add" element={<Add loggedIn={loggedIn} />} />
        <Route
          path="/UserPost"
          element={<UserPost loggedIn={loggedIn} singlePost={singlePost} />}
        />
        <Route
          path="/OthersPost"
          element={
            <OthersPost
              loggedIn={loggedIn}
              singlePost={singlePost}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
            />
          }
        />
        <Route path="/Profile" element={<Profile singlePost={singlePost} setSinglePost={setSinglePost}/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
};

export default App;
