import React, {useState} from 'react'
import {  Route, Routes } from "react-router-dom";
import {Posts,Register,Login,Header,Profile,Home} from "./"


const App = () => {
    return ( 
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />}/>
        <Route path="/" element={<Login />}/>
    </Routes>
    
)}

export default App;