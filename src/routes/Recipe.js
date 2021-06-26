import React from "react";
import { useHistory } from "react-router-dom";

const Recipe = () => {
    let history = useHistory();

    return(
        <div>
            <h1>저장된 레시피</h1>
            <h2>저장된 레시피가 없습니다. 레시피를 추가해주세요!</h2>
            <button>선택한 레시피 조회</button><br></br>
            <button>선택한 레시피 삭제</button><br></br>
            <button onClick={() => {
                history.push("/AddRecipe");
            }}>+ 레시피 추가하기</button>
        </div>
    );
};

export default Recipe;