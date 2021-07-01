import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_MY_INGREDIENT } from "../graphql/Mutation";
import Button from "../css/Button";
import { useHistory } from "react-router-dom";


const AddIngredients = () => {
    let history = useHistory();
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
                <Button onClick={()=>alert('재료가 추가되었습니다!')}>재료 추가하기</Button>
                <Button onClick={() => {
                    history.push("/");
                }}>홈화면으로 돌아가기
                </Button>
            </form>
        </div>
    );

};

export default AddIngredients;