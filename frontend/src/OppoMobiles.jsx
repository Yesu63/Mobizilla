import './styles/Home.css'
import tImage1 from '../public/oppoMobiles/k3.jpg'
import tImage2 from '../public/oppoMobiles/f11.jpg'
import tImage3 from '../public/oppoMobiles/a5.jfif'
import tImage4 from '../public/oppoMobiles/f7.jfif'
import tImage5 from '../public/oppoMobiles/a9.jfif'
import tImage6 from '../public/oppoMobiles/a15.jfif'
import tImage7 from '../public/oppoMobiles/a54.jfif'
import tImage8 from '../public/oppoMobiles/a57.jfif'
import tImage9 from '../public/oppoMobiles/a93.jfif'
import tImage10 from '../public/oppoMobiles/ax7.jpg'
import tImage11 from '../public/oppoMobiles/a94.jfif'
import tImage12 from '../public/oppoMobiles/f17.jfif'
import tImage13 from '../public/oppoMobiles/findx2.jfif'
import tImage14 from '../public/oppoMobiles/oppo74.jfif'
import tImage15 from '../public/oppoMobiles/r17.jfif'
import tImage16 from '../public/oppoMobiles/reno9.jpg'
import tImage17 from '../public/oppoMobiles/reno10.jfif'
import tImage18 from '../public/oppoMobiles/x2.jfif'
import './styles/TopMobiles.css'
import { useNavigate } from 'react-router-dom'
import KnowUs from './KnowUs'
import Footer from './Footer'

function OppoMobiles(){

const navigate = useNavigate();   
const cardSpec = [
    {
    id:18,
    url: tImage1,
    product :'OPPO K3 (Aurora Blue, 64 GB)  (6 GB RAM)',
    discount:'33% off',
    oldPrice: '11,999',
    newPrice: 'Rs.11,999'
},
{
    id:19,
    url: tImage2,
    product :'OPPO F11 Pro (Thunder Black, 64 GB))',
    discount:'10% off',
    oldPrice: '27,999',
    newPrice: 'Rs.24,999'
},
{
    id:20,
    url: tImage3,
    product :'OPPO A5 (Diamond Blue, 64 GB)',
    discount:'33% off',
    oldPrice: '23,999',
    newPrice: 'Rs.15,999'
},
{
    id:21,
    url: tImage4,
    product :'OPPO F7 (Red, 64 GB)',
    discount:'39% off',
    oldPrice: '32,999',
    newPrice: 'Rs.19,980'
},

{
    id:22,
    url: tImage5,
    product :'OPPO A9 2020 (Space Purple, 128 GB)',
    discount:'10% off',
    oldPrice: '19,999',
    newPrice: 'Rs.18,999'
},
{
    id:23,
    url: tImage6,
    product :'OPPO A15 (Dynamic Black, 32 GB)',
    discount:'10% off',
    oldPrice: '20,999',
    newPrice: 'Rs.19,999'
},
{
    id:24,
    url: tImage7,
    product :'OPPO A54 (Starry Blue, 128 GB)',
    discount:'9% off',
    oldPrice: '21,999',
    newPrice: 'Rs.21,180'
},
{
    id:25,
    url: tImage8,
    product :'OPPO A57 (Glowing Black, 64 GB)',
    discount:'6% off',
    oldPrice: '22,999',
    newPrice: 'Rs.22,398'
},
{
    id:26,
    url: tImage9,
    product :'OPPO A93 (Sunset Blue, 8GB RAM, 128 Storage)',
    discount:'5% off',
    oldPrice: '19,999',
    newPrice: 'Rs.19,599'
},
{
    id:27,
    url: tImage10,
    product :'OPPO AX7 (Sunset Blue, 8GB RAM, 64GB)',
    discount:'10% off',
    oldPrice: '21,999',
    newPrice: 'Rs.19,999'
},
{
    id:28,
    url: tImage11,
    product :'Oppo A94 (Blue, 4GB RAM, 128GB )',
    discount:'3% off',
    oldPrice: '27,999',
    newPrice: 'Rs.27,398'
},
{
    id:29,
    url: tImage12,
    product :'OPPO F17 Pro 8GB RAM (Magic Blue, 128 GB)',
    discount:'10% off',
    oldPrice: '29,999',
    newPrice: 'Rs.27,998'
},
{
    id:30,
    url: tImage13,
    product :'OPPO Find N2 8GB RAM ( Black, 128 GB)',
    discount:'10% off',
    oldPrice: '25,999',
    newPrice: 'Rs.24,999'
},
{
    id:31,
    url: tImage14,
    product :'OPPO A74 5G BLACK (Fluid Black, 64 GB)',
    discount:'6% off',
    oldPrice: '39,999',
    newPrice: 'Rs.38,298'
},
{
    id:32,
    url: tImage15,
    product :'OPPO R17 Pro (Radiant Mist, 128 GB)',
    discount:'5% off',
    oldPrice: '51,999',
    newPrice: 'Rs.49,999'
},
{
    id:33,
    url: tImage16,
    product :'Oppo Reno 9 Pro 5G(Navigator Beige, 128 GB)',
    discount:'6% off',
    oldPrice: '50,900',
    newPrice: 'Rs.47,900'
},
{
    id:34,
    url: tImage17,
    product :'Oppo Reno10 Pro 5G 12 GB RAM(Glossy, 256 GB)',
    discount:'3% off',
    oldPrice: '14,999',
    newPrice: 'Rs.13,599'
},
{
    id:35,
    url: tImage18,
    product :'Oppo x2 Pro 5G 8GB RAM(Black, 256 GB)',
    discount:'10% off',
    oldPrice: '19,999',
    newPrice: 'Rs.18,999'
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
                   <img className="mobileImage"  src={spec.url} alt="" />
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
            
export default OppoMobiles;