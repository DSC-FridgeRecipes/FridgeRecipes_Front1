import React, { useState } from "react";

const Login = () => {
    const [id, setID] = useState("");    
    const [password, setPassword] = useState("");
    //const [newAccount, setNewAccount] = useState(false);   //새로운 계정 만들기
    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if(name === "id"){
            setID(value);
        }else if (name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <div>
            <h1>로그인</h1>
            <form onSubmit={onSubmit}>
                <input  
                name="id" 
                type="text" 
                placeholder="ID" 
                required 
                value={id} 
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

//const Login = () => <span>Login</span>;
export default Login;