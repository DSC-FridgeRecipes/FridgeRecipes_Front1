import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import addIngr from "../routes/addIngr";

const Ingredient = () => {
    return(
        <div>
            <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/addIngr"><addIngr /></Route>
                </Switch>
            </BrowserRouter>
            </>
            <h1>저장된 재료</h1>
            <button>선택한 재료 삭제</button><br></br>
            <button>
            <Link to="/addIngr">+ 재료 추가하기</Link>
            </button>
        </div>
    );
};

export default Ingredient;