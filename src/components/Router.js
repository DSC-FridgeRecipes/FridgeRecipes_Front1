import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";
import Recipe from "../routes/Recipe";
import Ingredient from "../routes/Ingredient";
import addIngr from "../routes/addIngr";

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
                <Route exact path="/addIngr"><addIngr /></Route>
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
                <Route exact path="/">
                    <Login/>
                </Route>
                )}
                
            </Switch>
            
        </BrowserRouter>
    );
};

export default AppRouter;