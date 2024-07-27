import { useState } from 'react';
import './styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp(){
    const navigate = useNavigate();
    const [name,setName] = useState()
    const [userName,setUserName] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [result , setResult] = useState();

    const handleChange= (e)=>{
      e.preventDefault();
        if(password){
            const reg=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]){6,}/
            if(reg.test(password)){
                if(password === confirmPassword){
                    // localStorage.setItem("pwd",password);
                    // localStorage.setItem("uname", userName);
                    // setResult("Registration Successful");
                    axios.post("http://127.0.0.1:3002/register",{name,userName,password,confirmPassword})
                    .then(result => {
                        console.log(result);
                        if(result.data.name !== "" && result.data.userName !== "" && result.data.password !== "" && result.data.confirmPassword !== "" ){
                            setResult("Registration Successful");
                            var inputs = document.getElementsByTagName('input');
                            for (var i = 0; i < inputs.length; i++) {
                                inputs[i].value = '';
                            }   
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        if(err.response.status === 400){
                            toast.error(err.response.data.message);
                        }
                    });
                }
                else{
                    toast.error("Password Mismatch");
                }
            }
            else{
                toast.error("Password Should be minimum 6 digits and that includes one uppercase atleast");
            }
        }   
}

    const login=()=>{
        navigate("/login")
    }
    return(
        <div className="mainContainer">
        <div className="formContainer signupBorder" >
            <div className="fields">
            <h1>Sign Up</h1>
            <form onSubmit={handleChange}>
            <input type="text" placeholder="Name"  id='name' required onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Username" id='username'  onChange={(e)=>setUserName(e.target.value)} required />
            <input type="password"  placeholder="Password&nbsp;(Ex : abcDef123 - minimum 8 digit)" id='pass'  onChange={(e)=>setPassword(e.target.value)} required />
            <input type="password" placeholder="Confirm password" id='confirm' onChange={(e)=>setConfirmPassword(e.target.value)} required /> 
            <button type="submit"  className="signupbtn" >Register</button>
            </form>
            <div id="result">{result}</div>
            <p className='needAct'>Have account? &nbsp; <span className="signin" onClick={login}>Login</span></p>
        </div>
        </div>
   <ToastContainer/>
    </div>
    );
}
export default SignUp;



