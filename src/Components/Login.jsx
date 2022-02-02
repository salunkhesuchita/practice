import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AppContextProvider';
import styles from "./Styling/Login.module.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const {fetchUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        fetchUser({username, password});
    }   
    
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.myForm}>
                <h3>Login Form</h3>
                <label> Username
                    <input type="text"
                    name="username" value={username} placeholder="Username..."
                    onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br/>
                <label>Password
                    <input type="text"
                    name="password" value={password} placeholder="Password..." 
                    onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login
