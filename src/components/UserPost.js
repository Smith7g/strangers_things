import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, getProfile, } from "../api";

const UserPost = ({ loggedIn, singlePost }) => {
  const [onePost, setOnePost] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const token = localStorage.getItem("token");
      const returnPosts = await getProfile(token);
      console.log(returnPosts)
      setOnePost(returnPosts.posts);
    }
    fetchPosts();
  }, []);
console.log(onePost, 'im a postman')
  return  (
    <div>
        {onePost.map((post,index)=>{
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
                  </>
                </div>
              );
        })}
    </div>
)
};

export default UserPost;
