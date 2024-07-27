import './styles/Home.css'
import tImage1 from '../public/vivoMobiles/t2x.jfif'
import tImage2 from '../public/vivoMobiles/t2pro.jfif'
import tImage3 from '../public/vivoMobiles/t25g.jfif'
import tImage4 from '../public/vivoMobiles/v25pro.png'
import tImage5 from '../public/vivoMobiles/y36.jfif'
import tImage6 from '../public/vivoMobiles/y100.jpg'
import tImage7 from '../public/vivoMobiles/s1.jfif'
import tImage8 from '../public/vivoMobiles/s6.jfif'
import tImage9 from '../public/vivoMobiles/s7.jfif'
import tImage10 from '../public/vivoMobiles/v15.jpg'
import tImage11 from '../public/vivoMobiles/v17pro.jfif'
import tImage12 from '../public/vivoMobiles/v20.jpg'
import tImage13 from '../public/vivoMobiles/v21e.jfif'
import tImage14 from '../public/vivoMobiles/x50.jpg'
import tImage15 from '../public/vivoMobiles/x70pro.jpg'
import tImage16 from '../public/vivoMobiles/x90.jfif'
import tImage17 from '../public/vivoMobiles/y9s.jfif'
import tImage18 from '../public/vivoMobiles/z1x.jfif'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import KnowUs from './KnowUs'

function VivoMobiles(){
    const navigate = useNavigate();
    const cardSpec = [
        {
        id:0,
        url: tImage1,
        product :'vivo T2x 5G (Marine Blue, 128 GB)  (4 GB RAM)',
        discount:'33% off',
        oldPrice: '19,999',
        newPrice: 'Rs.11,999'
    },
    {
        id:1,
        url: tImage2,
        product :'Vivo T2 Pro 5G (Dune Gold, 256 GB) (8 GB RAM)',
        discount:'10% off',
        oldPrice: '27,999',
        newPrice: 'Rs.24,999'
    },
    {
        id:2,
        url: tImage3,
        product :'vivo T2 5G (Nitro Blaze, 128 GB) (6 GB RAM)',
        discount:'33% off',
        oldPrice: '23,999',
        newPrice: 'Rs.15,999'
    },
    {
        id:3,
        url: tImage4,
        product :'vivo V25 5G (Sunrise Gold, 128 GB)',
        discount:'39% off',
        oldPrice: '32,999',
        newPrice: 'Rs.19,980'
    },
   
    {
        id:4,
        url: tImage5,
        product :'Vivo Y36 8 GB RAM(Shadow Black, 128 GB) ',
        discount:'10% off',
        oldPrice: '19,999',
        newPrice: 'Rs.18,999'
    },
    {
        id:5,
        url: tImage6,
        product :'Vivo Y100 5G 8 GB RAM,(Metal Black, 128 GB)',
        discount:'10% off',
        oldPrice: '20,999',
        newPrice: 'Rs.19,999'
    },
    {
        id:6,
        url: tImage7,
        product :'vivo S1 Pro 8 GB RAM (Dreamy White, 128 GB)',
        discount:'9% off',
        oldPrice: '21,999',
        newPrice: 'Rs.21,180'
    },
    {
        id:7,
        url: tImage8,
        product :'vivo S6 Pro 8 GB RAM (Cream White, 128 GB)',
        discount:'6% off',
        oldPrice: '22,999',
        newPrice: 'Rs.22,398'
    },
    {
        id:8,
        url: tImage9,
        product :'vivo S7 8 GB RAM (Dreamy White, 128 GB)',
        discount:'5% off',
        oldPrice: '19,999',
        newPrice: 'Rs.19,599'
    },
    {
        id:9,
        url: tImage10,
        product :'vivo V15 Pro (Topaz Blue, 128 GB)',
        discount:'10% off',
        oldPrice: '21,999',
        newPrice: 'Rs.19,999'
    },
    {
        id:10,
        url: tImage11,
        product :'vivo V17 (Midnight Ocean Black, 128 GB)',
        discount:'3% off',
        oldPrice: '27,999',
        newPrice: 'Rs.27,398'
    },
    {
        id:11,
        url: tImage12,
        product :'vivo V20 Pro (Midnight Jazz, 128 GB)',
        discount:'10% off',
        oldPrice: '29,999',
        newPrice: 'Rs.27,998'
    },
    {
        id:12,
        url: tImage13,
        product :'Vivo V21e 5G (Dark Pearl, 8GB RAM, 128GB)',
        discount:'10% off',
        oldPrice: '25,999',
        newPrice: 'Rs.24,999'
    },
    {
        id:13,
        url: tImage14,
        product :'vivo X50 (Glaze Black, 256 GB)',
        discount:'6% off',
        oldPrice: '39,999',
        newPrice: 'Rs.38,298'
    },
    {
        id:14,
        url: tImage15,
        product :'vivo X70 Pro+ (Enigma Black, 256 GB)',
        discount:'5% off',
        oldPrice: '51,999',
        newPrice: 'Rs.49,999'
    },
    {
        id:15,
        url: tImage16,
        product :'vivo X90 (Asteroid Black, 256 GB)',
        discount:'6% off',
        oldPrice: '50,900',
        newPrice: 'Rs.47,900'
    },
    {
        id:16,
        url: tImage17,
        product :'vivo y9s (Glaze Black, 128 GB)',
        discount:'3% off',
        oldPrice: '14,999',
        newPrice: 'Rs.13,599'
    },
    {
        id:17,
        url: tImage18,
        product :'Vivo VZ1 Pro (Sonic Blue, 4GB RAM, 64GB Storage)',
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

export default VivoMobiles;