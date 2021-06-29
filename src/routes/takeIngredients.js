import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_MY_RECIPE } from "../graphql/Query";

const Ingredients = () => {

const{ loading, error, data } = useQuery(GET_ALL_MY_RECIPE);

if(loading) return "Loading...";
if(error) return `에러 발생 ${error.message}`;
if(!data) return <span>저장된 재료가 없습니다 추가해주세요!</span>
if(data)
return(
    <ul>
        {data.getAllMyRecipes.map( Ingredient =>(
            <li>{Ingredient.ingredientNameList}</li>
        ))}
    </ul>
);


        };

export { Ingredients };