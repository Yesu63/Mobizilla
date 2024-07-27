import { Link, useNavigate } from 'react-router-dom';
import './styles/Login.css'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login(){
    
        const navigate = useNavigate();
        const [userName,setUserName] = useState()
        const [password, setPassword] = useState()

        const handleChange= (e)=>{
          e.preventDefault();
          // if(userName===localStorage.getItem("uname") && password===localStorage.getItem("pwd")){
          //   navigate('/home')
          //   window.location.reload();
          //   localStorage.setItem("status",true);
          //   localStorage.setItem("userName",userName);
          // }
          // else{
          //   toast.error("Password Incorrect") 
          // }
        
          axios.post("http://127.0.0.1:3002/login",{userName,password})
          .then(result=>{
                    console.log(result);
                    if(result.data === "Success"){
                        navigate('/home')
                        window.location.reload();
                        localStorage.setItem("status",true);
                        localStorage.setItem("userName",userName);
                    }
                    else if(result.data === "Password Incorrect"){
                        // document.getElementById("result").innerHTML = 'Password Incorrect';
                        toast.error("Password Incorrect")
                        document.getElementById("passin").style.border = "3px solid red"
                        document.getElementById("passin").style.boxShadow = "3px 2px 15px red"
                    }
                    else if(result.data === "No user found"){
                        document.getElementById("userin").style.border = "3px solid red";
                        document.getElementById("userin").style.boxShadow = "3px 2px 15px red"
                        toast.error("Username Not Found")
                        // document.getElementById("result").innerHTML = 'Username Not Found';
                    }
        }).catch(err=>console.log(err));
        }
        const signup = ()=>{
            navigate("/signup")
        }
      
    return(
        <div className="loginOuterContainer">
        <div className="loginContainer">
          
         <div className="formContainer signinBorder">
             <div className="fields">
             <h1>Log In</h1>
             <form onSubmit={handleChange}>
             <input type="text" placeholder="Username"  id="userin"  onChange={(e)=>setUserName(e.target.value)} required/>
             <input type="password" placeholder="Password" id="passin" onChange={(e)=>setPassword(e.target.value)} required/>
             <button  type="submit" className="loginbtn" >Login</button>
             </form>
             <div id="result"></div>
             <p className='needAct'>Need an account?&nbsp;<span  onClick={signup} className="signup">Sign Up</span></p>
         </div>
         </div>
     </div>
     <ToastContainer/>
     </div>
    );
}
export default Login

