import React, { useEffect } from "react";
import { gql, useQuery } from '@apollo/client';
import { GET_RECIPES_WITH_SOME_INGREDIENTS } from '../graphql/Query';

const Back = () => {

    const { loading, error, data } = useQuery(GET_RECIPES_WITH_SOME_INGREDIENTS, {
        variables: { ingredients: ['된장', '딸기'] },
      });

    useEffect(() => {
        console.log(data);
    }, [data]);

    return(
        <div>
            <h1>Backend Test Page</h1>
            { loading && (
                <p>loading...</p>
            )}
            { error && (
                <p>{`Error! ${error}`}</p>
            )}
            { data && data.getRecipesWithSomeIngredients.map((recipe, idx) => (
                <div
                    key={recipe.id}
                >
                    <h3>{`${recipe.title}`}</h3>
                    <p>{`${recipe.content}`}</p>
                </div>
            ))}
        </div>
    );
};

export default Back;