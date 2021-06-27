import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";
import Recipe from "../routes/Recipe";
import Ingredient from "../routes/Ingredient";
import AddIngr from "../routes/addIngr";
import AddRecipe from "../routes/AddRecipe";
import ViewRecipe from "../routes/ViewRecipe";
import SearchRecipe from "../routes/SearchRecipe";
import styled from 'styled-components';
import {shadow} from "../css/styleUtil"

const Positioner = styled.div` //화면 가운데에 고정시킨다.
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div` //그림자 설정
    width: 500px;
    padding: 20px;
    background-color: #A3CDD9;
    ${shadow(2)}
`;

const AppRouter = ({isLoggedIn}) => {
    return (
        <BrowserRouter>
            <Switch>
                {isLoggedIn ? (
                <>
                
                <Positioner>
                <ShadowedBox>
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
                    </button>
                    <br/>
                    <button>
                    <Link to="/Ingredient">저장된 재료 조회</Link>
                    </button>
                </ul>
                </ShadowedBox>
                </Positioner>
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