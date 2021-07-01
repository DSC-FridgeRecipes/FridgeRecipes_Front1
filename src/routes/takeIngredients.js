import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_MY_RECIPE } from "../graphql/Query";

/*const takeIngredients = () => {


// eslint-disable-next-line react-hooks/rules-of-hooks
const{ loading, error, data } = useQuery(GET_ALL_MY_RECIPE),{
    variables: { userId:  'tester1@example.com' },

});

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

export { takeIngredients };
*/
