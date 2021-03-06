import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";
import Recipe from "../routes/Recipe";
import Ingredient from "../routes/Ingredient";
import AddIngredients from "../routes/AddIngredients";
import AddRecipe from "../routes/AddRecipe";
import ViewRecipe from "../routes/ViewRecipe";
import SearchRecipe from "../routes/SearchRecipe";
import SignUp from "../routes/SignUp";
import Wrapper from "../css/Wrapper";
import img1 from "../css/img/img1.png";
import Button from "../css/Button";
import Test from '../routes/Test';

const AppRouter = ({isLoggedIn}) => {
    return (
        <BrowserRouter>
            <Switch>
                {isLoggedIn ? (
                <>
                
                <Wrapper>

                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Recipe"><Recipe /></Route>
                <Route exact path="/Ingredient"><Ingredient /></Route>
                <Route exact path="/AddIngredients"><AddIngredients /></Route>
                <Route exact path="/AddRecipe"><AddRecipe /></Route>
                <Route exact path="/ViewRecipe"><ViewRecipe /></Route>
                <Route exact path="/SearchRecipe"><SearchRecipe /></Route>
                    
                

                </Wrapper>

                <div className="img"> 
                    <img src={img1}/>    
                </div>
                <Route exact path="/Test" component={Test}/>
                </> 
                ) : (
                <>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route exact path="/SignUp"><SignUp /></Route>
                <Redirect from="*" to="/" />
                </>
                )}
                
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;