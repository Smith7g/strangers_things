import React, {useState} from 'react'
import {  Route, Routes } from "react-router-dom";
import {Posts,Register,Login,Header,Profile} from "./"


const App = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        
        
    <Routes>
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Profile" element={<Profile username={username}/>} />
        <Route path="/Register" 
        element={<Register regUsername={regUsername} 
        regPassword={regPassword} 
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword} 
        setRegUsername={setRegUsername}
        setRegPassword={setRegPassword}/>}/>
        <Route exact path="/" 
        element={<Login username={username} 
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}/>}/>
    </Routes>
    
)}

export default App;