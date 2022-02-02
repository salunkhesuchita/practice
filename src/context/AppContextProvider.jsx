import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(false);

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [showHamBurger, setShowHamBurger] = useState(false)


    const history = useHistory();
    const fetchUser = ({ username, password }) => {
        // console.log(username, password)
        axios.post('https://reqres.in/api/login', {
            username,
            password
        })
            .then((res) => {
                setIsAuth(true);
                history.push("/")
                setToken(res.data.token);
            })
        .catch((err) => setIsAuth(false))
    }

    const fetchData = (key, value) => {
        setIsLoading(true)
        axios.get(`https://restorent-details.herokuapp.com/items?${key}=${value}`, {
            params: {
                 
            }
        })
            .then((res) => setData(res.data))
            .catch((err) => setIsError(true))
        .finally(() => setIsLoading(false))
    }
    

    const handleSignOut = () => {
        setIsAuth(false)
    }
    const hamBurgerHandlerFromNav = () => {
        setShowHamBurger(!showHamBurger)
    }
    const hamBurgerHandler = () => {
        setShowHamBurger(false)
        console.log("ghvhgvkg")
    }
    // console.log(isAuth)
    const value = {
        isAuth, fetchUser, fetchData, token,
        handleSignOut, isLoading, isError, data,
        hamBurgerHandler, showHamBurger, hamBurgerHandlerFromNav
    }
    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

// export default AuthContextProvider
