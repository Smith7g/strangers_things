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
    alert("Message has sent successfully");
    setNewMessage("");
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
                    <div>{post.description}</div>
                    <div>
                      <b>Price:</b> {post.price}
                    </div>
                    <div>
                      <b>Seller:</b> {post.author.username}
                    </div>
                    <div>
                      <b>Location:</b> {post.location}
                    </div>
                <form className="messageForm" onSubmit={handleSubmit}>
                  <input
                    className="messageText"
                    type="text"
                    name="username"
                    placeholder="Message"
                    onChange={messageChange}
                    value={newMessage}
                  />
                  <button type="submit" className="messageButton">Message</button>
                </form>
              </>
            </div>
          );
      })}
    </div>
  );
};

export default OtherPost;
