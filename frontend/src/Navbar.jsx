import './styles/Navbar.css'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {FaWindowClose} from 'react-icons/fa'
import {FaShoppingCart } from 'react-icons/fa'


function Navbar(){
    const [isMobile, setIsMobile] = useState(false);
    const isLoggedin = localStorage.getItem("status");
    const userName = localStorage.getItem("userName");
    const [isfirstTime, setIsFirstTime] = useState(false);
    const items = isLoggedin? localStorage.getItem(`${userName}items`) : 0;
        
    function clear(){
        localStorage.removeItem("status");
        location.reload();
        window.location.href="/";
    }
    return(
        <>
        <nav className='header'>
            <div className='logo'>
            <img  className='logoImg' src={logo} title='logo'></img>
            <span className='logoText'>MobiZilla</span>
            </div>
            <ul className={isMobile? 'mobileList' : 'list'} onClick={()=> setIsMobile(false)}>
                <Link to="/home" className="home">
                    <li>Home</li>
                </Link>

                <Link to="/return" className="return">
                    <li>Easy Return</li>
                </Link>

                <Link>
                <div className="dropdown">
                    <div className="dropbtn" onClick={()=> setIsMobile(true)}>Products</div>
                    <div className="dropdown-content">
                        <Link to="/vivo">VIVO</Link>
                        <Link to="/oppo">OPPO</Link>
                        <Link to="/samsung">SAMSUNG</Link>
                        <Link to="/realme">REALME</Link>
                    </div>
                </div>
                </Link>

                <Link to="/Contactus" className="contactus">
                    <li>Contact Us</li>
                </Link>
                
                
                {isMobile? <Link to="/cart" className="return">
                    <li className='shopMob'><span className='badgeMob'>{items}</span><FaShoppingCart></FaShoppingCart > </li>
                </Link> :
                <Link to="/cart" className="return">
                <li className='shop'><span className='badge'>{items}</span><FaShoppingCart></FaShoppingCart ></li>
            </Link>}

                {isLoggedin? <Link  className="login">
                    <li onClick={()=>setIsFirstTime(!isfirstTime)}>Welcome , <span className='userName'>{userName}</span></li>
                </Link>:<Link to="/login" className="login">
                    <li>Login</li>
                </Link>}

                {isfirstTime && isMobile ? 
                    <div id='welcomeMobileBlock'>
                    <ul onClick={()=>setIsFirstTime(!isfirstTime)}>
                        <li>MobiZilla Welcomes You</li>
                        <Link to="/profile"><li className='profNav'>Profile</li></Link>
                        <li onClick={clear}>Logout &#128075;</li>
                    </ul>
                    </div> : 
                isfirstTime ? 
                    <div id='welcomeBlock'>
                    <ul onClick={()=>setIsFirstTime(!isfirstTime)}>
                        <li>MobiZilla Welcomes You &#128591;</li>
                        <Link to="/profile"><li className='profNav'>Profile</li></Link>
                        <li  className="log" onClick={clear}>Logout &#128075;</li>
                    </ul>
                   </div> : ""}
            </ul> 
            <button className='icon' onClick={()=> setIsMobile(!isMobile)}>{isMobile? <FaWindowClose></FaWindowClose>:<FaBars></FaBars>}</button>
        </nav>
       </>
    )
}
export default Navbar