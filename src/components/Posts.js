import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts,getProfile } from "../api";

const Posts = ({ loggedIn, setSinglePost,singlePost}) => {
  const [allPosts, setAllPosts] = useState([]);
  const [person, setPerson] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPosts() {
      const returnPosts = await getPosts();
      setAllPosts(returnPosts);
    }
    fetchPosts();
    async function fetchPerson() {
      const token = localStorage.getItem('token')
      const returnProfile = await getProfile(token);
      setPerson(returnProfile)
      
    }
    fetchPerson();
  }, []);

  const catchId = (Id) => {

    setSinglePost(Id)
    return singlePost
  }

  return (
    <div className="posts">
      {loggedIn ? (
        <>
          <h1>Posts</h1>
          <button
            className="addPost"
            onClick={() => {
              navigate("/Add");
            }}
          >
            Add post
          </button>
          {allPosts.length
            ? allPosts.map((post, index) => {
                return (
                  <div key={index} className='allPosts'>
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
                      {post.author._id === person._id  ?<button
                        className="Edit"
                        onClick={() => {
                          catchId(post._id)
                          navigate(`/UserPost`)
                        }} 
                        
                      >
                        View
                      </button> :<button
                        className="View"
                        onClick={() => {
                          catchId(post._id)
                          navigate("/OthersPost");
                        }} 
                      >
                        Send Message
                      </button>}
                    </>
                  </div>
                );
              })
            : null}
        </>
      ) : (
        <>
          <h1>Posts</h1>
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
        </>
      )}
    </div>
  );
};

export default Posts;
