import React from "react";
import { useHistory } from "react-router-dom";



const AddRecipe = () => {
    let history = useHistory();

    return(
        <div>
            <h1>레시피 추가하기</h1>
            <h3>아래의 저장된 재료들을 선택하여 레시피를 검색한 후, 레시피를 추가하세요.</h3>
            <button onClick={() => {
                history.push("/SearchRecipe");
            }}>레시피 검색</button>
        </div>
    );
};

export default AddRecipe;