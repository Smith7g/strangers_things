import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProfile,getPosts } from "../api";

const Profile = ({ singlePost,setSinglePost }) => {
  let token = "";
  const [allPosts, setAllPosts] = useState([]);
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    async function fetchPosts() {
      const returnPosts = await getPosts();
      setAllPosts(returnPosts);
    }
    fetchPosts();
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getProfile(token);
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);
  
  return localStorage.getItem("loggedIn") ? (
    <div className="boxes">
      <h3>Messages from Shoppers:</h3>
      <div>
        {myInfo.data ? myInfo.data.messages.map((message, index)=>{
          return (
             (myInfo.data.username !== message.fromUser.username) ? <div key={index} className="allPosts">
            <div>
            {message.fromUser.username}
            </div>
            <div>
            {message.content}
            </div>
            <div>
            View My Post: <Link
            className="Button"
            to={`/UserPost/`}
            onClick={() => {
              setSinglePost(message.post._id)
            }}
          >
            {`${message.post.title}`}
          </Link> 
            </div>
          </div> : null
        )
      }) : null}
    </div>



      <h3>Messages from Me:</h3>
      <div>
        {myInfo.data ? myInfo.data.messages.map((message,index)=>{
        return (
          <div key={index} className="allPosts">
            <div>
              (Sent By Me)
            </div>
            <div>
            {message.content}
            </div>
            <div>
            Message Again:<Link
            className="Button"
            to={`/OthersPost/`}
            onClick={() => {
              setSinglePost(message.post._id)
            }}
          >
            {`${message.post.title}`}
          </Link> 
            </div>
          </div>
        )
      }) : null}</div>
    </div>
  ) : null
};

export default Profile;
