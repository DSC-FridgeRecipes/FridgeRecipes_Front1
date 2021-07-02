import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MY_RECIPE } from "../graphql/Query";
import '../css/App.css';

const AddRecipes = () => {
    //const {getAllMyRecipes, setGetAllMyRecipes} = useState({});
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery(GET_ALL_MY_RECIPE, {
        variables: { userId: '60d499a79fa1ed5f303b77a7' }, // userId 수정 필요
    });

    // setGetAllMyRecipes(
    //     <div>
    //     {getAllMyRecipes && getAllMyRecipes.map(recipe => {
    //             return {
    //                 select: false,
    //                 title: recipe.title,
    //                 content: recipe.content
    //             };
    //     })}
    //     </div>
    // );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (

        <div>
            {loading && (
                <p>loading...</p>
            )}
            {error && (
                <p>{`Error! ${error}`}</p>
            )}
            {data && data.getAllMyRecipes.map((recipe, idx) => (
                <div>
                    <input 
                    // onChange={(event)=>{
                    //     let checked=event.target.checked;
                    //     setGetAllMyRecipes(
                    //         getAllMyRecipes.map(data => {
                    //             if(recipe.title == data.title){
                    //                 data.select = checked;
                    //             }
                    //             return data;
                    //         })
                    //     );
                    // }} 
                    type="checkbox" 
                    checked={recipe.select}/>
                    <text className="ingredientName"> {`${recipe.title}`} </text><br></br>
                    <text>{`${recipe.content}`}</text>
                </div>
                // <div>

                // </div>
            ))}
            {!data && (
                <p>저장된 레시피가 없습니다. 추가해주세요!</p>
            )}
        </div>
    );
};

export default AddRecipes;

