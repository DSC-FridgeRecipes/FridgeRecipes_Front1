import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/react-hooks";
import { GET_ALL_MY_RECIPE } from "../graphql/Query";

/*const takeRecipes = ({match : {params : { userId }}}) => {

userId = Number(userId);

// eslint-disable-next-line react-hooks/rules-of-hooks
const{ loading, error, data } = useQuery(GET_ALL_MY_RECIPE);

if(loading) return "Loading...";
if(error) return `에러 발생 ${error.message}`;
if(!data) return <span>저장된 레시피가 없습니다 추가해주세요!</span>
if(data)
return(
    <ul>
        {data.getAllMyRecipes.map( Recipe =>(
            <li>{Recipe.title}</li>
        ))}
    </ul>
);

        };

export { takeRecipes };*/

const takeRecipes  = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery(GET_ALL_MY_RECIPE, {
        variables: { userId : 'tester1@example.com' },
      });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log(data);
    }, [data]);

    return(
        <div>
            { loading && (
                <p>loading...</p>
            )}
            { error && (
                <p>{`Error! ${error}`}</p>
            )}
            { data && data.GetAllMyRecipes.map((recipe, idx) => (
                <div>
                    <h3>{`${recipe.title}`}</h3>
                    <p>{`${recipe.content}`}</p>
                </div>
            ))}
            { !data && (
                <p>저장된 레시피가 없습니다. 추가해주세요!</p>
            )}
        </div>
    );
};

export default takeRecipes ; 