import React, { useState, useEffect } from 'react'
// import { registerPerson } from '../api'

async function handleSubmit(event) {
    event.preventDefault()
    registerPerson(event)
}

const App = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    return (<div>
        <h1>Log In</h1>
        <form id="loginForm">
         <input type='text' name='username' placeholder='UserName' value={username}  />
         <input type='text' name='password' placeholder='Password' value={password} />
         <button type='submit'>Log In</button>
        </form>
        <a href="#" >Click here to Register!</a>
        </div>)
}

export default App;