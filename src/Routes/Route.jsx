import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home'
import SpecificProduct from '../Components/SpecificProduct'
import Login from '../Components/Login'
import PrivateRoute from './PrivateRoute'
import TV from '../Components/TV'
import Smartphone from '../Components/Smartphone'
import Computer from '../Components/Computer'
import Men from '../Components/Men'
import Women from '../Components/Women'
import Kids from '../Components/Kids'
import About from '../Components/About'
import PageNotFound from '../Components/PageNotFound'

const Rout = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/tv">
                    <TV/>
                </Route>
                <Route exact path="/smartphone">
                    <Smartphone/>
                </Route>
                <Route exact path="/computer">
                    <Computer/>
                </Route>
                <Route exact path="/men">
                    <Men/>
                </Route>
                <Route exact path="/women">
                    <Women/>
                </Route>
                <Route exact path="/kids">
                    <Kids/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <PrivateRoute exact path="/items/:id">
                    <SpecificProduct/>
                </PrivateRoute>
                <PrivateRoute redirected="/login" exact path="/cart">
                    
                </PrivateRoute>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route>
                    <PageNotFound/>
                </Route>
                
                
            </Switch>
        </div>
    )
}

export default Rout
