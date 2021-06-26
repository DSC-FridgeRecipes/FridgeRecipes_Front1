import React from "react";
import { useHistory } from "react-router-dom";

const Ingredient = () => {
    let history = useHistory();

    return(
        <div>
            <h1>저장된 재료</h1>
            <button>선택한 재료 삭제</button><br></br>
            <button onClick={() => {
                history.push("/AddIngr");
            }}>+ 재료 추가하기</button>
        </div>
    );
}

export default Ingredient;