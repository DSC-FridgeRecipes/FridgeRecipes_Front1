import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputLabel from "../css/InputLabel";
import Wrapper from "../css/Wrapper";
import img1 from "../css/img/img1.png";
import Button from "../css/Button";

const Login = () => {
    const [email, setEmail] = useState("");    
    const [password, setPassword] = useState("");
    let history = useHistory();
    //const [newAccount, setNewAccount] = useState(false);   //새로운 계정 만들기
    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if(name === "email"){
            setEmail(value);
        }else if (name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();     //default행위가 실행되지 않도록 막는다
    };

    return(
        <>
        <Wrapper>
            <h1>로그인</h1>
            <form onSubmit={onSubmit}> {/* form을 제출할 때 onSubmit함수가 실행되도록 한다 */}
             <InputLabel name="email" type="email" placeholder="E-mail" value={email} onChange={onChange}/>
             <InputLabel name="password" type="password" placeholder="Password" value={password} onChange={onChange}/>
                <input type="submit" value="Login"/>
                <Button onClick={() => {
                    history.push("/SignUp");
                }}>회원가입
                </Button>
            </form>
            
        </Wrapper>

            <div className="img"> 
                    <img src={img1}/>    
                </div>

        </>
    );
}

export default Login;