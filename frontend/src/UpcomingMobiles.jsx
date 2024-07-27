import uImage2 from './assets/xiaomi14.png'
import uImage1 from './assets/iphone16.jfif'
import uImage3 from './assets/samsangFold6.jpg'
import uImage4 from './assets/oneplus13.jpg'
import uImage5 from './assets/oppoN3.jpg'
import uImage6 from './assets/narzo70.jfif'
import './styles/Upcoming.css'
import { useNavigate } from 'react-router-dom'

function UpcomingMobiles(){
    const upComing = [
        {
            url : uImage1,
            product: "iPhone 16 series",
            desc1:"Pill-shaped bump houses and Ultrawide lenses expected to arrive in Fall 2024",
            desc21:"Estimated Price starts from ",
            desc22:"Rs.82,900",
            desc31:"Avail upto ",
            desc32:"2%",
            desc33:"discount",
            desc4:"(by pre booking)",
            desc5:"Pre-Book"
        },
        
        {
            url : uImage2,
            product: "Xiaomi 14 Ultra",
            desc1:"Xiaomi MIX model with an under-display camera expected on April 2024",
            desc21:"Estimated Price starts from ",
            desc22:"Rs.59,999",
            desc31:"Avail upto ",
            desc32:"1%",
            desc33:"discount",
            desc4:"(by pre booking)",
            desc5:"Pre-Book"
        },
        
        {
            url : uImage3,
            product: "Samsung Galaxy Z Fold 6",
            desc1:"Packed with AI features & wide lenses expected to arrive in July 26 2024",
            desc21:"Estimated Price starts from ",
            desc22:"Rs.1,79,990",
            desc31:"Avail upto ",
            desc32:"2%",
            desc33:"discount",
            desc4:"(by pre booking)",
            desc5:"Pre-Book"
        },
        {
            url : uImage4,
            product: "OnePlus 13 pro",
            desc1:"Snapdragon 8 Gen4, Octa Core and expected to arrive in December 29 2024",
            desc21:"Estimated Price starts from ",
            desc22:"Rs.69,990",
            desc31:"Avail upto ",
            desc32:"5%",
            desc33:"discount",
            desc4:"(by pre booking)",
            desc5:"Pre-Book"
        },
        {
            url : uImage5,
            product: "Oppo Find N3 Flip",
            desc1:"Generasi Baru dengan chipset  and expected to arrive in May 2024",
            desc21:"Estimated Price starts from ",
            desc22:"Rs.89,999",
            desc31:"Avail upto ",
            desc32:"2%",
            desc33:"discount",
            desc4:"(by pre booking)",
            desc5:"Pre-Book"
        },
        {
            url : uImage6,
            product: "Narzo 70 Pro",
            desc1:"Generasi Baru dengan chipset and expected to arrive in May 2024",
            desc21:"Estimated Price starts from ",
            desc22:"Rs.59,999",
            desc31:"Avail upto ",
            desc32:"2%",
            desc33:"discount",
            desc4:"(by pre booking)",
            desc5:"Pre-Book"
        }
        

    ]
return(
    <div className="upComingMobile">
        <h4 className='heading'>UPCOMING MOBILE</h4>
        <div className='uLayout'>
        {upComing.map((upcoming,index)=>(
            <div className="upMobileCard"  key={index}>
            <div> 
                <img src={upcoming.url} alt="" className={index===0 ? "iphone":"cardImage"}  />
            </div>
            <div className="cardText">
            <p><strong>{upcoming.product}</strong></p>
            <p className='extraDetails'>{upcoming.desc1}</p>
                <p>Estimated Price starts from <span className='cost'>&nbsp;{upcoming.desc22}</span></p>
            </div>
        </div>
        ))}
        </div>
    </div>
);
}
export default UpcomingMobiles;