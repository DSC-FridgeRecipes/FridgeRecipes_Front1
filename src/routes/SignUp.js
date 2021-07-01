import React from "react";
import { useHistory } from "react-router-dom";
// import Button from "../css/Button";

const SignUp = () => {

    return(
        <div>
            <h1>회원가입</h1>
            <form>
                <h3>개인 정보 입력</h3>
                이름 : <input type = "text" name = "name" required/><br></br>
                이메일 : <input type = "text" name = "email" required/><br></br>
                닉네임 : <input type = "text" name = "nickname"/><br></br>
                비밀번호 : <input type = "password" name = "password" required/><br></br>
                <input type = "submit"  value = "가입" />
                <input type = "reset"  value = "지우기" /><br></br>
            </form>
        </div>
    );
};

export default SignUp;