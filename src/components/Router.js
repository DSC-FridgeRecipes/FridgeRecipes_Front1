import React, { useState } from "react";
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";
import Recipe from "../routes/Recipe";
import Ingredient from "../routes/Ingredient";
import addIngredients from "../routes/addIngredients";
import AddRecipe from "../routes/AddRecipe";
import ViewRecipe from "../routes/ViewRecipe";
import SearchRecipe from "../routes/SearchRecipe";
import Wrapper from "../css/Wrapper";
import img1 from "../css/img/img1.png";
import Button from "../css/Button";
import addIngr from "../routes/addIngr";
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

                <Route exact path="/addIngredients"><addIngredients /></Route>
                <Route exact path="/AddRecipe"><AddRecipe /></Route>
                <Route exact path="/ViewRecipe"><ViewRecipe /></Route>
                <Route exact path="/SearchRecipe"><SearchRecipe /></Route>
                    
                <Button>
                    <Link to="/Recipe">저장된 레시피 조회</Link>
                    </Button>
           
                    <Button>
                    <Link to="/Ingredient">저장된 재료 조회</Link>
                    </Button>

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
                <Redirect from="*" to="/" />
                </>
                )}
                
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;