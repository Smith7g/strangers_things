import React, {useState} from 'react'
import {  Route, Routes } from "react-router-dom";
import {Posts,Register,Login} from "./"


const App = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    console.log(setUsername)
    return (
<Routes>
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Register" 
        element={<Register username={username} 
        password={password} 
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword} 
        setUsername={setUsername}
        setPassword={setPassword}/>}/>
        <Route exact path="/" 
        element={<Login username={username} 
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}/>}/>
    </Routes>
)}

export default App;