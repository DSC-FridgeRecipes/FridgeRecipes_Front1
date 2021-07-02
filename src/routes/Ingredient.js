import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../css/Button";
import TakeIngredients from "../components/TakeIngredients";

const Ingredient = () => {
    let history = useHistory();

    return(
        <div>
            <h1>저장된 재료</h1>
            <TakeIngredients/>
            <Button onClick={() => {
                history.push("/AddIngredients");
            }}>+ 재료 추가하기</Button>
            <Button onClick={()=>alert('해당 재료가 삭제되었습니다!')}>선택한 재료 삭제</Button>
        </div>
    );
}

export default Ingredient;