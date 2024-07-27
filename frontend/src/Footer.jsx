import img1 from './assets/fb.jfif'
import img2 from './assets/insta.jfif'
import img3 from './assets/twitter.jfif'
import './styles/Footer.css'

function Footer(){
    return(
        <div className="footer">
          
          <div className="socialConnect">
            <a href="https://twitter.com/"><img className="sIcon" src={img3} alt="" /></a>
            <a href='https://www.facebook.com/'><img className="sIcon" src={img1} alt="" /></a>
            <a href='https://www.instagram.com/'><img className="sIcon" src={img2} alt="" /></a>
          </div>
          <p className='footerText'>© Copyright 2024 MobiZilla. All rights reserved.</p>
        </div>
    )
}
export default Footer;