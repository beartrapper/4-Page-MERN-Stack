// import React from 'react';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CategoriesPage from './Components/CategoriesPage';
import DescriptionPage from './Components/DescriptionPage';
import EmailPage from './Components/EmailPage';


// temp

import React, {Component} from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import {setCurrentUser, logoutUser} from "./actions/authActions";
import {Provider} from "react-redux";
import store from "./store";

// import Navbar from "./Components/layout/Navbar";
// import Landing from "./Components/layout/Landing";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import AdPage from './Components/AdsPage';
import newAd from './Components/NewAd';
// import PrivateRoute from "./Components/private-route/PrivateRoute";
// import Dashboard from "./Components/dashboard/Dashboard";


if (localStorage.jwtToken) { // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) { // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = "./login";
    }
}


function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/categories">
                            <CategoriesPage/>
                        </Route>
                        <Route path="/ad">
                            <DescriptionPage/>
                        </Route>
                        <Route path="/ads">
                            <AdPage/>
                        </Route>
                        <Route path="/email">
                            <EmailPage/>
                        </Route>
                        {/* <Route exact path="/landing" component={Landing} /> */}
                        <Route exact path="/register"
                            component={Register}/>
                                 <Route exact path="/create"
                            component={newAd}/>
                        <Route exact path="/login"
                            component={Login}/> {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */} </Switch>
                </Router>
            </Provider>
        </>
    );
}

export default App;
