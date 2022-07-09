import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, getProfile } from "../api";

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

  return  (
    <div>
        im a real boy
    </div>
)
};

export default UserPost;
