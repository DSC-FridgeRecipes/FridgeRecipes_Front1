import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";
import Recipe from "../routes/Recipe";
import Ingredient from "../routes/Ingredient";
import AddIngr from "../routes/AddIngr";
import AddRecipe from "../routes/AddRecipe";
import ViewRecipe from "../routes/ViewRecipe";
import SearchRecipe from "../routes/SearchRecipe";

const AppRouter = ({isLoggedIn}) => {
    return (
        <BrowserRouter>
            <Switch>
                {isLoggedIn ? (
                <>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Recipe"><Recipe /></Route>
                <Route exact path="/Ingredient"><Ingredient /></Route>
                <Route exact path="/AddIngr"><AddIngr /></Route>
                <Route exact path="/AddRecipe"><AddRecipe /></Route>
                <Route exact path="/ViewRecipe"><ViewRecipe /></Route>
                <Route exact path="/SearchRecipe"><SearchRecipe /></Route>
                <ul>
                    <button>
                        <Link to="/Recipe">저장된 레시피 조회</Link>
                    </button><br></br>
                    <button>
                        <Link to="/Ingredient">저장된 재료 조회</Link>
                    </button>
                </ul>
                </> 
                ) : (
                <>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Redirect from="*" to="/" />
                </>
                )}
                
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;