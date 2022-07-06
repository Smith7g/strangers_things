import React, { useState, useEffect } from "react";
import { getPosts } from "../api";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const returnPosts = await getPosts();
      setAllPosts(returnPosts);
    }
    fetchPosts();
  }, []);
  return (
    <div>
      {allPosts.length
        ? allPosts.map((post, index) => {
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
          })
        : null}
    </div>
  );
};
export default Posts;
