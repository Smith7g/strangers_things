import React from 'react'
import { useState,useEffect } from 'react'
import { getProfile } from '../api'

const Profile = ({username}) => {
    let token = ""
    const [myInfo,setMyInfo]=useState({})
    useEffect (() => {
        token = localStorage.getItem('token')
        async function getMyInfo() {
            const myReturnedInfo = await getProfile(token)
            console.log(myReturnedInfo, 'api info')
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    },[])
    return (
        <div className="boxes">
         <h1>{`Welcome ${username}`}</h1>
         <h3>Messages to Me:</h3>
        {/* {messages will go here} */}
        </div>
    )

}
export default Profile;