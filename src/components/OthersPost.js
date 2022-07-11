import React from "react";
import { useState, useEffect } from "react";
import { getPosts, addMessage } from "../api";

const OtherPost = ({ singlePost, newMessage, setNewMessage }) => {
  const [onePost, setOnePost] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const returnPosts = await getPosts();
      setOnePost(returnPosts);
    }
    fetchPosts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const postid = singlePost;
    const postMessage = await addMessage(token, postid, newMessage);
    console.log(postMessage);
    setNewMessage("")
    alert("Message has sent successfully")
    return postMessage;
  };

  const messageChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div>
      {onePost.map((post, index) => {
        if (singlePost === post._id)
          return (
            <div key={index}>
              <>
                <h2>{post.title}</h2>
                <h4>Description: {post.description}</h4>
                <h4>Price: {post.price}</h4>
                <h4>Seller: {post.author.username}</h4>
                <h4>Location: {post.location}</h4>
                <form className="messageForm" onSubmit={handleSubmit}>
                  <input
                    className="messageText"
                    type="text"
                    name="username"
                    placeholder="Message"
                    onChange={messageChange}
                    value={newMessage}
                  />
                  <button className="messageButton">Message</button>
                </form>
              </>
            </div>
          );
      })}
    </div>
  );
};

export default OtherPost;
