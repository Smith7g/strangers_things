import React from 'react'
import { registerPerson } from '../api'

async function handleSubmit(event) {
    event.preventDefault()
    registerPerson(event)
}

const App = () => {
    return (<div>
        <h1>Log In</h1>
        <form id="loginForm">
         <input type='text' name='username' placeholder='UserName' />
         <input type='text' name='password' placeholder='Password'/>
         <button type='submit'>Log In</button>
        </form>
        <a href="#" >Click here to Register!</a>
        </div>)
}

export default App;