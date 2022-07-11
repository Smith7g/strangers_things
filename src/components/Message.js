import React, { useState } from "react";
import { addMessage } from "../api";

const Message = ({singlePost, newMessage}) => {
  const sendMessage = async () => {
    const token = localStorage.getItem("token");
    const postid = singlePost;
    const addPost = await addMessage(token, postid, message);
    navigate("/Posts");
    return addPost;
  };

  return <div></div>
};

export default Message;
