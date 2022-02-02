import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AppContextProvider';


const PrivateRoute = ({path, exact=true, children, redirected="/" }) => {
    const { isAuth } = useContext(AuthContext);
    return (
        isAuth ? <Route exact={exact} path={path} >
            {children}
        </Route> :
            <Redirect to={redirected} />
    )
}

export default PrivateRoute
