import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../css/Button";

const Home = () => {
    let history = useHistory();
    return(
        <div>
            <h1>홈</h1>
            <Button onClick={() => {
                    history.push("/Recipe");
                }}>저장된 레시피 조회
            </Button>
            <Button onClick={() => {
                    history.push("/Ingredient");
                }}>저장된 재료 조회
            </Button>
        </div>
    );
};

export default Home;