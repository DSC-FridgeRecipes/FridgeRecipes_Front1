import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";
import Recipe from "../routes/Recipe";
import Ingredient from "../routes/Ingredient";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                <>
                <Route exact path="/">
                    <Home />
                </Route>
                </> 
                ) : (
                <Route exact path="/">
                    <Login/>
                </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;