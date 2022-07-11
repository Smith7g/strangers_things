import React from "react";
import { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {
  let token = "";
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getProfile(token);
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);

  return (
    (localStorage.getItem('loggedIn')) ?
        <div className="boxes">
         <h1>{`Welcome ${myInfo.username}`}</h1>
         <h3>Messages to Me:</h3>
        </div> 
        :
        <div className="boxes">
         <h1>{`Welcome!`}</h1>
         <h3>Please log in or register to view a profile.</h3>
        </div>
  );
};

export default Profile;
