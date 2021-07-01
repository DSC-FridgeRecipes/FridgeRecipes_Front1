import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../css/Button";
import TakeRecipes from "./TakeRecipes";

const Recipe = () => {
    let history = useHistory();

    return(
        <div>
            <h1>저장된 레시피</h1>
            <TakeRecipes />
            <Button>
            선택한 레시피 조회
            </Button>
          
            <Button>
            선택한 레시피 삭제
            </Button>
         
            <Button onClick={() => {
                history.push("/AddRecipe");
            }}>+ 레시피 추가하기
            </Button>
        </div>
    );
};

export default Recipe;