import './styles/Home.css'
import tImage1 from '../public/realmeMobiles/x50.jfif'
import tImage2 from '../public/realmeMobiles/x7.jfif'
import tImage3 from '../public/realmeMobiles/x2.jfif'
import tImage4 from '../public/realmeMobiles/v11.png'
import tImage5 from '../public/realmeMobiles/r11.jfif'
import tImage6 from '../public/realmeMobiles/r8pro.jfif'
import tImage7 from '../public/realmeMobiles/r7i.jfif'
import tImage8 from '../public/realmeMobiles/r7.jfif'
import tImage9 from '../public/realmeMobiles/q2.jfif'
import tImage10 from '../public/realmeMobiles/neo2.jfif'
import tImage11 from '../public/realmeMobiles/narzo60.jfif'
import tImage12 from '../public/realmeMobiles/narzo30.jfif'
import tImage13 from '../public/realmeMobiles/narzo20a.jfif'
import tImage14 from '../public/realmeMobiles/gt2.jfif'
import tImage15 from '../public/realmeMobiles/c35.jfif'
import tImage16 from '../public/realmeMobiles/c31.jfif'
import tImage17 from '../public/realmeMobiles/c17.jfif'
import tImage18 from '../public/realmeMobiles/c15.jfif'
import './styles/TopMobiles.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import KnowUs from './KnowUs'

function RealmeMobiles(){

    const navigate = useNavigate();
    const cardSpec = [
        {
        id:54,
        url: tImage1,
        product :'Realme X50 Pro (Rust Red, 128 GB)',
        discount:'33% off',
        oldPrice: '19,999',
        newPrice: 'Rs.11,999'
    },
    {
        id:55,
        url: tImage2,
        product :'Realme X7 Pro 5G (Fantasy, 128 GB)',
        discount:'10% off',
        oldPrice: '37,999',
        newPrice: 'Rs.34,999'
    },
    {
        id:56,
        url: tImage3,
        product :'Realme X2 Pro (Neptune Blue, 256 GB)',
        discount:'33% off',
        oldPrice: '29,999',
        newPrice: 'Rs.22,999'
    },
    {
        id:57,
        url: tImage4,
        product :'Realme v11 5G (Navigator Beige, 256 GB)',
        discount:'39% off',
        oldPrice: '32,999',
        newPrice: 'Rs.19,980'
    },
   
    {
        id:58,
        url: tImage5,
        product :'Realme 11 5G (Glory Gold, 128 GB)  (8 GB RAM) ',
        discount:'10% off',
        oldPrice: '19,999',
        newPrice: 'Rs.18,999'
    },
    {
        id:59,
        url: tImage6,
        product :'Realme 8 Pro (Infinite Blue, 128 GB)',
        discount:'10% off',
        oldPrice: '17,999',
        newPrice: 'Rs.16,999'
    },
    {
        id:60,
        url: tImage7,
        product :'Realme 7i (Fusion Green, 64 GB)',
        discount:'9% off',
        oldPrice: '21,999',
        newPrice: 'Rs.21,180'
    },
    {
        id:61,
        url: tImage8,
        product :'Realme 7 (Mist Blue, 64 GB)',
        discount:'6% off',
        oldPrice: '22,999',
        newPrice: 'Rs.22,398'
    },
    {
        id:62,
        url: tImage9,
        product :'Realme Q2 5G (Submarine Blue, 256 GB)',
        discount:'5% off',
        oldPrice: '49,999',
        newPrice: 'Rs.48,599'
    },
    {
        id:63,
        url: tImage10,
        product :'Realme GT Neo 2 (Nitro Blue, 256 GB)',
        discount:'10% off',
        oldPrice: '31,999',
        newPrice: 'Rs.30,999'
    },
    {
        id:64,
        url: tImage11,
        product :'Realme Narzo 60X 5G (Nebula Purple, 128 GB)',
        discount:'3% off',
        oldPrice: '47,999',
        newPrice: 'Rs.46,399'
    },
    {
        id:65,
        url: tImage12,
        product :'Realme Narzo 30 (Racing Silver, 128 GB)',
        discount:'10% off',
        oldPrice: '19,999',
        newPrice: 'Rs.17,998'
    },
    {
        id:66,
        url: tImage13,
        product :'Realme Narzo 20A (Victory Blue, 128 GB)',
        discount:'10% off',
        oldPrice: '25,999',
        newPrice: 'Rs.24,999'
    },
    {
        id:67,
        url: tImage14,
        product :'Realme GT 2 Pro (Paper White, 256 GB)',
        discount:'6% off',
        oldPrice: '39,999',
        newPrice: 'Rs.38,298'
    },
    {
        id:68,
        url: tImage15,
        product :'Realme C35 (Glowing Black, 128 GB)',
        discount:'5% off',
        oldPrice: '12,999',
        newPrice: 'Rs.11,999'
    },
    {
        id:69,
        url: tImage16,
        product :'Realme C31 (Light Silver, 128 GB)',
        discount:'6% off',
        oldPrice: '14,900',
        newPrice: 'Rs.13,900'
    },
    {
        id:70,
        url: tImage17,
        product :'Realme c17(Navigator Beige, 64 GB)',
        discount:'3% off',
        oldPrice: '14,999',
        newPrice: 'Rs.13,599'
    },
    {
        id:71,
        url: tImage18,
        product :'Realme C15 (Glowing Black, 64 GB)',
        discount:'10% off',
        oldPrice: '11,999',
        newPrice: 'Rs.10,999'
    }
]

   
const handleClick = (index)=>{
    navigate(`/spec/${index}`)
}


return(
    <>
    <div className="vivo">
    {cardSpec.map((spec)=>(
        <div className='tmobile' key={spec.id} onClick={() => handleClick(spec.id)  } >
               <img className="mobileImage"   src={spec.url} alt="" />
               <p>{spec.product}</p>
               <p className="mobileText1"><span className='offer'>{spec.discount} </span><del>&nbsp;{spec.oldPrice}</del></p>
               <p className="mobileText2">{spec.newPrice}</p>
         </div>
     ))}     
 </div>
 <KnowUs/>
 <Footer/>
 </>
)

}
    

export default RealmeMobiles