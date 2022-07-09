import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, getProfile } from "../api";

const OtherPost = ({ loggedIn, singlePost }) => {
  const [onePost, setOnePost] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const returnPosts = await getPosts();
      setOnePost(returnPosts);
    }
    fetchPosts();
  }, []);
  console.log(onePost, "im a postman");
  return (
    <div>
      {onePost.map((post, index) => {
        console.log(post._id, "Dont stop believing");
        console.log(singlePost, "hey im helping");
        if (singlePost === post._id)
          return (
            <div key={index}>
              <>
                <h2>{post.title}</h2>
                <div>{post.description}</div>
                <div>
                  <b>Price:</b> {post.price}
                </div>
                <h4>Seller: {post.author.username}</h4>
                <div>
                  <b>Location:</b> {post.location}
                </div>
                <form>
                  <input type="text" name="username" placeholder="Message" />
                  <button
                    className="message"
                    // onClick={() => {
                    //   catchId(post._id);
                    //   navigate(`/UserPost`);
                    // }}
                  >
                    Message
                  </button>
                </form>
              </>
            </div>
          );
      })}
    </div>
  );
};

export default OtherPost;
