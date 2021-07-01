import React from "react";
import Button from "../css/Button";
import { useHistory } from "react-router-dom";

const ViewRecipe = () => {
    let history = useHistory();
    return(
        
        <div>
            <h1>레시피 저장하기</h1>
            <h3>아래의 레시피들 중 원하는 레시피를<br></br> 선택하여 저장해 주세요.</h3>
            <Button onClick={()=>alert('레시피가 저장되었습니다!')}>레시피 저장</Button>
            <Button onClick={() => {
                    history.push("/");
                }}>홈화면으로 돌아가기
                </Button>
        </div>

    );
};

export default ViewRecipe;