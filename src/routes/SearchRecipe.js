import React from "react";
import { useHistory } from "react-router-dom";

const SearchRecipe = () => {
    let history = useHistory();

    return(
        <div>
            <h1>레시피 추가하기</h1>
            <h3>저장된 재료들을 선택하여 검색된 레시피 중, 하나의 레시피를 선택하여 조회하고 저장할 수 있습니다.</h3>
            <button onClick={() => {
                history.push("/ViewRecipe");
            }}>선택한 레시피 조회</button>
        </div>
    );
};

export default SearchRecipe;