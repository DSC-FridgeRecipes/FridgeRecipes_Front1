import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../css/Button";
import AddRecipes from "../components/AddRecipes";

const SearchRecipe = () => {
    let history = useHistory();

    return(
        <div>
            <h1>레시피 추가하기</h1>
            <h3>저장된 재료들을 선택하여 검색된 레시피 중, 하나의 레시피를 선택하여 저장할 수 있습니다.</h3>
            <AddRecipes/>
            {/* <Button onClick={() => {
                history.push("/ViewRecipe");
            }}>선택한 레시피 조회</Button> */}
            <Button onClick={()=>alert('레시피가 저장되었습니다!')}>레시피 저장</Button>
            <Button onClick={() => {
                    history.push("/");
                }}>홈화면으로 돌아가기
            </Button>
       
        </div>
    );
};

export default SearchRecipe;