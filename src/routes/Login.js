import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");    
    const [password, setPassword] = useState("");
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
        <div>
            <h1>로그인</h1>
            <form onSubmit={onSubmit}> {/* form을 제출할 때 onSubmit함수가 실행되도록 한다 */}
                <input  
                name="email" 
                type="email" 
                placeholder="Email" 
                required 
                value={email} 
                onChange={onChange}/>
                <input 
                name="password"
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={onChange} />
                <input type="submit" value="Log In"/>
            </form>
        </div>
    )
}

export default Login;