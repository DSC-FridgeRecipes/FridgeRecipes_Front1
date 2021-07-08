import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MY_INGREDIENTS } from "../graphql/Query";

const TakeIngredients  = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(GET_ALL_MY_INGREDIENTS, {
  variables: { userId : '60d499a79fa1ed5f303b77a7' }, // userId 수정 필요
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
            { data && data.getAllMyIngredients.map((ingredient, idx) => (
                <div>
                    <input 
                   type="checkbox" 
                   //checked={recipe.select}
                   />
                   {`${ingredient}`}

                </div>
            ))}
            { !data && (
                <p>저장된 재료가 없습니다. 추가해주세요!</p>
            )}
        </div>
    );
};

export default TakeIngredients; 

