import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_MY_INGREDIENT } from "../graphql/Mutation";

const AddIngredients = () => {

    let input;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ addIngr, { data } ] = useMutation(ADD_MY_INGREDIENT);

    console.log(data);

    return (
        <div>
            <form onSubmit = { e => {
                e.preventDefault();
                addIngr({
                    variables: {
                        userId: '60d499a79fa1ed5f303b77a7', // userId 수정 필요
                        ingredient: input.value,
                    }
                });
                input.value = "";
            }}>
                <input ref={ node => {
                    input = node;
                }} />
                <button type="submit">재료 추가하기</button>
            </form>
        </div>
    );

};

export default AddIngredients;