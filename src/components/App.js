import React, {useState} from 'react'
import {  Route, Routes } from "react-router-dom";
import {Posts,Register,Login,Header,Profile} from "./"


const App = () => {

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [regUsername, setRegUsername] = useState("");
    // const [regPassword, setRegPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    return (
        
        
    <Routes>
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" 
        element={<Register />}/>
        <Route exact path="/" 
        element={<Login />}/>
    </Routes>
    
)}

export default App;