import './styles/Home.css'
import vivo from './assets/viv.png'
import samsung from './assets/samsung.png'
import realme from './assets/realme.png'
import oppo from './assets/oppo.png'
import './styles/Knowus.css'
import { Link } from 'react-router-dom'

function KnowUs(){
    return(
        <div className="knowusContainer">
          
            <div className='knowus'>
                <Link to='#'><p>About</p></Link>
                <Link to='/return'><p>Return</p></Link>
                <Link to='/contactus'><p>Contact</p></Link>
            </div>
            <div className='connectus'>
                <Link to='https://www.facebook.com/'><p>Facebook</p></Link>
                <Link to='https://www.instagram.com/'><p>Instagram</p></Link>
                <Link to='https://twitter.com/'><p>Twitter</p></Link>
            </div>
            <div className='knowbrands'>
                <img src={vivo} /> 
                <img src={oppo} />
                <img className='samsung' src={samsung} />
                <img className='realme' src={realme} />
            </div>
            <div className='stayConct'>
                <p className='conctWith'>Stay Connect with</p>
                <p><strong>Email</strong> : mobizilla@mob.com</p>
                <p><strong>Mobile</strong> : 1800 889 1055</p>
                <p>(9:30 AM to 7:30 PM Available)</p>
            </div>
            
        </div>
    )
}
export default KnowUs;