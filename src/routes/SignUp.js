import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../css/Button";
import InputLabel from "../css/InputLabel";
import Wrapper from "../css/Wrapper";
import img1 from "../css/img/img1.png";

const SignUp = () => {
    return(
        <>
        <Wrapper>
        <div>
            <img src={img1}/>  
        <Wrapper>
            <h1>회원가입</h1>
            <form>
                <h3>개인 정보 입력</h3>
                <InputLabel type = "text" placeholder="이름" name = "name" required/>
                <InputLabel type = "text" placeholder="E-mail" name = "email" required/>
                <InputLabel type = "text" placeholder="닉네임" name = "nickname"/>
                <InputLabel type = "password" placeholder="비밀번호" name = "password" required/>
                <Button type = "submit">회원가입</Button>
                <Button type = "reset">지우기</Button>
            </form>
        </Wrapper>
        </div>
        </Wrapper>

        <div className="img"> 
            <img src={img1}/>    
        </div>
        </>
    );
};

export default SignUp;