import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api";

const Home = ({loggedIn}) => {
    const navigate = useNavigate();
    let token = ""
    const [myInfo,setMyInfo]=useState({})
    useEffect (() => {
        token = localStorage.getItem('token')
        console.log(token, "this is our token")
        async function getMyInfo() {
            const myReturnedInfo = await getProfile(token)
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    },[]);

    return(
        <div>
            {loggedIn ? (
                <>
                    <h1>Welcome to Stranger's Things</h1>
                    {myInfo && myInfo.username ? <h3>{`Logged in as ${myInfo.username}`}</h3> : null}
                    <button onClick={(()=>{navigate('/Profile')})}>VIEW PROFILE</button>
                </>
            ) : (
                <>
                <h1>Welcome to Stranger's Things</h1>
                <button onClick={(()=>{navigate('/')})}>PLEASE LOGIN</button>
                </>
            )}
            
        </div>
    )
}

export default Home;
