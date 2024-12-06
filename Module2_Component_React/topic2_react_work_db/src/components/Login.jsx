import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:9999/users")
            .then(res => setUsers(res.data))
            .catch(err=>console.error(err));
    }, []);

    function validateLogin(){
        // Tự làm
        return true;
    }

    const handleLogin = () => {
        if(validateLogin()){
           const existUser = users?.find(u => u?.user==username && u?.pass == password)
           if(existUser){
                // Lưu thông tin tài khoản này vào localStorage
                localStorage.setItem("account", JSON.stringify({id: existUser.id, username: existUser.user}));
                alert("Login successfully");
                navigate("/jobs");
           }else{
                setMessage("This account not registered!");
           }
        }
    }

    return (
        <div>
            {
                message && <div style={{color:"red"}}>{message}</div>
            }
            <h3>Login System</h3>
            Username *
            <input onChange={e=>setUsername(e.target.value)}/>
            <br/>
            Password *
            <input type="password" onChange={e=>setPassword(e.target.value)}/>
            <br/>
            <button onClick={()=>handleLogin()}>Login</button>
        </div>
    )
}

export default Login;