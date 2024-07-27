import './styles/ContactUs.css'
import ccImg from './assets/customercare.jpg'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Footer from './Footer';
import KnowUs from './KnowUs';
import contactImg from './assets/contactImage.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactUs(){
    const [fullName, setFullName] = useState();
    const navigate = useNavigate;
    const [email,setEmail] = useState()
    const isLoggedin = localStorage.getItem("status");
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const userName = localStorage.getItem("userName");

    const handleChange= async(e)=>{
        e.preventDefault();
        if(isLoggedin){
            await axios.post("http://127.0.0.1:3002/contact",{userName,fullName,email,phone,message})
                .then(result=>console.log(result))
                .catch(err=>console.log(err));
                alert("Data Submitted Successfully")
                var inputs = document.getElementsByTagName('input');
                document.getElementById('query').value='';
                for (var i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }
        }
        else{
            alert("Login First")
        }
       
    }

    return(
        
        <div className="contactContainer">
            <div>
                <img className="contactImage" src={ccImg} alt="" />
                <p className='contactText'>WE WOULD LOVE TO HELP YOU<br/><span className="reach">REACH US AT</span></p>
            </div>
            <div className="contactDetails">
                <div className='cantactCard'>
                    <p className='cardHead'><BsTelephone/> Call Us</p>
                    <p className='cardBody'>For E-Commerce Related Queries</p>
                    <p className='cardBody'>1800 889 1055 <br/>( 9:30 AM to 7:30 PM, 365 days )</p>
                    <p className='cardBody'>For Return Related Queries</p>
                    <p className='cardBody'>1800 889 1066 <br/>( 9:30 AM to 7:30 PM, 365 days )</p>
                </div>
                <div className='cantactCard'>
                    <p className='cardHead'><BsWhatsapp/> Whatsapp Us</p>
                    <p className='cardBody'>Post all your Queries</p>
                    <p className='cardBody'>We are now on WhatsApp Send Hi!<br/> to below Number</p>
                    <p className='cardFooter'>9361324628</p>
                    <p className='cardBody'>For Return Related Queries</p>
                    <p className='cardBody'>9361324628 </p>
                </div>
                <div className='cantactCard'>
                    <p className='cardHead'><AiOutlineMail/> Email Us</p>
                    <p className='cardBody'>For E-Commerce Related Queries</p>
                    <p className='cardFooter'>mobizilla@mb.com</p>
                    <p className='cardBody'>For Return Queries</p>
                    <p className='cardFooter'>mobizillareturn@mb.com</p>
                </div>
            </div>
            <div className="contactForm">
                <div className="leftForm">
                    <img  className='contactImg' src={contactImg} alt="" />
                </div>
                <div className="rightForm">
                <div className="outsideContainer">
                    <h2>CONTACT FORM</h2>
                    <form onSubmit={handleChange}>
                    <input type="text" placeholder='Full Name' id='fullName' required onChange={(e)=>setFullName(e.target.value)} />
                    <input type="email" name="" id="emailAddrs" placeholder='Email Address' required onChange={(e)=>setEmail(e.target.value)}  />
                    <input type="tel" name="" id="mobileNo"  placeholder='Mobile Number' required onChange={(e)=>setPhone(e.target.value)} />
                    <textarea  className="textArea" name="" id="query" cols="30" rows="10" placeholder='Enter your Message Here' required onChange={(e)=>setMessage(e.target.value)} ></textarea>
                    <button  className="submitForm" type="submit" id='formSubmit' value="">Submit</button>
                    </form>
                </div>
                </div>
            </div>
            <KnowUs/>
            <Footer/>
            </div>
    );
}
export default ContactUs