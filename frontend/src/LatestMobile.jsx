import './styles/Home.css'
import tImage1 from "../public/samsungMobiles/s23.jfif"
import tImage2 from '../public/vivoMobiles/s1.jfif'
import tImage3 from '../public/oppoMobiles/reno10.jfif'
import tImage4 from '../public/realmeMobiles/narzo60.jfif'
import tImage5 from './assets/samsungS24.jfif'
import tImage6 from '../public/vivoMobiles/x70pro.jpg'
import './styles/TopMobiles.css'
import { useNavigate } from 'react-router-dom'

function LatestMobile(){
    const navigate = useNavigate();
    const topMobile=[
        {
            id:52,
            url:tImage1,
            product:"SAMSUNG Galaxy S23 FE (Graphite, 256 GB)",
            discount:"10% off",
            oldPrice:"37,999",
            newPrice:"Rs.33,999"
        },
        {
            id:6,
            url:tImage2,
            product:"Vivo S1 Pro (Stragaze Blue,16 GB, 512 GB)",
            discount:"6% off",
            oldPrice:"74,999",
            newPrice:"Rs.69,999"
        },
        {
            id:34,
            url:tImage3,
            product:"Oppo Reno10 Pro 5G(Glossy, 256 GB)",
            discount:"5% off",
            oldPrice:"89,999",
            newPrice:"Rs.84,999"
        },
        {
            id:64,
            url:tImage4,
            product:"Realme Narzo 60X 5G (Nebula Purple, 128 GB)",
            discount:"6% off",
            oldPrice:"1,59,900",
            newPrice:"Rs.1,48,900"
        },
        {
            id:53,
            url:tImage5,
            product:"SAMSUNG Galaxy S24 Ultra(Gold , 256 GB)",
            discount:"3% off",
            oldPrice:"1,44,999",
            newPrice:"Rs.1,39,999"
        },
        {
            id:14,
            url:tImage6,
            product:"vivo X70 Pro+ (Enigma Black, 256 GB)",
            discount:"5% off",
            oldPrice:"51,999",
            newPrice:"Rs.49,999"
        }
    ]

    const handleChange=(id)=>{
        navigate(`/spec/${id}`)
    }
    return(
        <div className="topSelection">
        <p className='head'>LATEST MOBILES</p>
        <div className="topMobiles">
           
           {topMobile.map((top)=>(
           <div className="tmobile" key={top.id} onClick={()=>handleChange(top.id)}>
               <img className="mobileImage"  src={top.url} alt="" />
               <p>{top.product}</p>
               <p className="mobileText1"><span className='offer'>{top.discount}</span><del>&nbsp;{top.oldPrice}</del></p>
               <p className="mobileText2">{top.newPrice}</p>
           </div>))}
        </div> 
      </div>
    )
}
export default LatestMobile