import './styles/Home.css'
import tImage1 from "../public/oppoMobiles/findx2.jfif"
import tImage2 from '../public/vivoMobiles/t2x.jfif'
import tImage3 from '../public/oppoMobiles/reno9.jpg'
import tImage4 from '../public/realmeMobiles/gt2.jfif'
import tImage5 from '../public/samsungMobiles/s23.jfif'
import tImage6 from '../public/vivoMobiles/x90.jfif'
import './styles/TopMobiles.css'
import { useNavigate } from 'react-router-dom'

function TopMobiles(){

    const navigate = useNavigate();
    const topMobile=[
        {
            id:0,
            url:tImage2,
            product:"vivo T2x 5G (Marine Blue, 128 GB)",
            discount:"10% off",
            oldPrice:"37,999",
            newPrice:"Rs.33,999"
        },
        {
            id:30,
            url:tImage1,
            product:"Oppo Find x2(Stragaze Blue,16 GB, 512 GB)",
            discount:"6% off",
            oldPrice:"74,999",
            newPrice:"Rs.69,999"
        },
        {
            id:33,
            url:tImage3,
            product:"Oppo Reno 9Pro(Cream Gold, 256 GB)",
            discount:"5% off",
            oldPrice:"89,999",
            newPrice:"Rs.84,999"
        },
        {
            id:67,
            url:tImage4,
            product:"Realme GT (Titanium, 256 GB)",
            discount:"6% off",
            oldPrice:"39,999",
            newPrice:"Rs.38,298"
        },
        {
            id:52,
            url:tImage5,
            product:"Samsung S23 Ultra (Titanium, 512 GB)",
            discount:"3% off",
            oldPrice:"1,44,999",
            newPrice:"Rs.1,39,999"
        },
        {
            id:15,
            url:tImage6,
            product:"Vivo X90(Illusion Sky, 128 GB)",
            discount:"10% off",
            oldPrice:"80,000",
            newPrice:"Rs.70,000"
        }
    ]

    const handleChange=(id)=>{
        navigate(`/spec/${id}`)
    }
    return(
        <div className="topSelection">
        <p className='head'>TOP MOBILES</p>
        <div className="topMobiles">
           {topMobile.map((top)=>(
           <div className="tmobile" key={top.id} onClick={()=>handleChange(top.id)}>
               <img className="mobileImage" src={top.url} alt="" />
               <p>{top.product}</p>
               <p className="mobileText1"><span className='offer'>{top.discount}</span><del>&nbsp;{top.oldPrice}</del></p>
               <p className="mobileText2">{top.newPrice}</p>
           </div>))}
        </div> 
      </div>
    )
}
export default TopMobiles