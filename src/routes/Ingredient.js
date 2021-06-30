import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../css/Button";
import { ApolloProvider } from "@apollo/react-hooks";
import { takeIngredients } from "./takeIngredients";
import  client  from "../apollo";

const Ingredient = () => {
    let history = useHistory();

    return(
        <div>
            <h1>저장된 재료</h1>
            <Button>선택한 재료 삭제</Button>
            <Button onClick={() => {
                history.push("/addIngredients");
            }}>+ 재료 추가하기</Button>
        </div>
    );
}

export default Ingredient;