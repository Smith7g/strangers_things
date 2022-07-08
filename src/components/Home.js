import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api";

const Home = () => {
    const navigate = useNavigate();
    let token = ""
    const [myInfo,setMyInfo]=useState({})
    useEffect (() => {
        token = localStorage.getItem('token')
        async function getMyInfo() {
            const myReturnedInfo = await getProfile(token)
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    },[])
    return(
        <div>
            <h1>Welcome to Stranger's Things</h1>
            <h3>{`Logged in as ${myInfo.username}`}</h3>
            <button onClick={(()=>{navigate('/Profile')})}>VIEW PROFILE</button>
        </div>
    )
}
export default Home;