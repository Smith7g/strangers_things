import React from "react";
import { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = ({ singlePost }) => {
  let token = "";
  const [myInfo, setMyInfo] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getProfile(token);
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
    async function fetchPosts() {
      const token = localStorage.getItem("token");
      const returnPosts = await getProfile(token);
      setUserPosts(returnPosts.posts);
    }
    fetchPosts();
  }, []);

  const appearMessage = () => {
    return (
      <div>
        {userPosts.map((post, index) => {
          if (singlePost === post._id) {
            return (
              <div key={index}>
                <>{post.messages}</>
              </div>
            );
          }
          console.log(post.messages);
        })}
      </div>
    );
  };

  return localStorage.getItem("loggedIn") ? (
    <div className="boxes">
      <h1>{`Welcome ${myInfo.username}`}</h1>
      <h3>Messages to Me:</h3>
      <div>{appearMessage()}</div>
    </div>
  ) : (
    <div className="boxes">
      <h1>{`Welcome!`}</h1>
      <h3>Please log in or register to view a profile.</h3>
    </div>
  );
};

export default Profile;
