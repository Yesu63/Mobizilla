import './styles/Profile.css'
import profile from '../public/images/profile.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile(){
    const userName = localStorage.getItem("userName");
    const status = localStorage.getItem("status");
    const [userimage, setUserImage] =useState(null);
    const [address, setAddress] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [ fullName, setFullName] = useState();
    const navigate = useNavigate()

useEffect(()=>{
    axios.post("http://127.0.0.1:3002/address/retrive",{userName})
    .then(result=>{
        setAddress(result.data.address)
        setMobile(result.data.phoneNumber)
        console.log(result)
    }).catch(err=>console.log(err));
    axios.post("http://127.0.0.1:3002/contact1",{userName})
    .then(result=>{
        setEmail(result.data.email)
        setMessage(result.data.message)
        setFullName(result.data.fullName)
        console.log(result)
    }).catch(err=>console.log(err))
       
},[userName])

    const orders =()=>{
        navigate("/myorder")
    }
    const carts =()=>{
        navigate("/cart")
    }
if(status){
    return(
        <div className="profileContainer">
           <div className="profileLeft">
                { userimage ?
                        <img className="profImage" src={URL. createObjectURL(userimage)} alt="userimage"/>:
                        <img className="profImage" src={profile} alt=""  />
                }
            <input type="file" id="fileUpload" onChange={(e) => setUserImage(e.target.files[0])} />
            <label htmlFor="fileUpload" ><span className='upload'>Upload Image</span></label>
                <p className='usrName'>USER NAME : {userName}</p>
           </div>
           <div className="profileRight">
           <div className="detailsRight">
                    <button  className="orders" onClick={orders}>Orders</button>
                    <button className="orders" onClick={carts}>Recent Carts</button>
                </div>
                <hr />
                <div className="detailsAddrs">
                    <div className="addrsDet">
                        <h2>Address Details</h2>
                        <p className='delAddrs' >Delivery Address <address className='addrs'> {address}</address></p>
                        <p className='delAddrs'>Phone Number </p> <span className='phnNo'>{mobile}</span>
                    </div>
                    <div className="personalDet">
                        <h2>Personal Details</h2>
                        <p className='full'>Full Name : <span className='fullname'>{fullName}</span></p>
                        <p className='full'> Email Address :  <span className='fullname'>{email}</span></p>
                        <p><strong>Last Query You Made</strong></p>
                        <p className='qryBox'><span className='msg'>{message}</span></p> 
                    </div>
               </div>
           </div>
        </div>
        )
    }
    else{
        
        navigate("/login")
    }
}

export default Profile;