import './styles/Home.css'
import tImage1 from '../public/samsungMobiles/a13.jfif'
import tImage2 from '../public/samsungMobiles/a23.jfif'
import tImage3 from '../public/samsungMobiles/a51.jfif'
import tImage4 from '../public/samsungMobiles/a52.jfif'
import tImage5 from '../public/samsungMobiles/a53.jfif'
import tImage6 from '../public/samsungMobiles/ao2s.jfif'
import tImage7 from '../public/samsungMobiles/f12.jfif'
import tImage8 from '../public/samsungMobiles/f13.jfif'
import tImage9 from '../public/samsungMobiles/f41.jfif'
import tImage10 from '../public/samsungMobiles/f53.jfif'
import tImage11 from '../public/samsungMobiles/f62.jfif'
import tImage12 from '../public/samsungMobiles/m42.jfif'
import tImage13 from '../public/samsungMobiles/m62.jfif'
import tImage14 from '../public/samsungMobiles/s10.jfif'
import tImage15 from '../public/samsungMobiles/s21.jfif'
import tImage16 from '../public/samsungMobiles/s22plus.jfif'
import tImage17 from '../public/samsungMobiles/s23.jfif'
import tImage18 from '../public/samsungMobiles/s24.jfif'
import './styles/TopMobiles.css'
import { useNavigate } from 'react-router-dom'
import KnowUs from './KnowUs'
import Footer from './Footer'

function SamsungMobiles(){
    const navigate = useNavigate();
    const cardSpec = [
        {
        id:36,
        url: tImage1,
        product :'SAMSUNG Galaxy A13 (Peach, 64 GB)',
        discount:'33% off',
        oldPrice: '19,999',
        newPrice: 'Rs.11,999'
    },
    {
        id:37,
        url: tImage2,
        product :'SAMSUNG Galaxy A23 5G (Orange, 128 GB)',
        discount:'10% off',
        oldPrice: '27,999',
        newPrice: 'Rs.24,999'
    },
    {
        id:38,
        url: tImage3,
        product :'SAMSUNG Galaxy A51 (Prism Crush Blue, 128 GB)',
        discount:'33% off',
        oldPrice: '23,999',
        newPrice: 'Rs.15,999'
    },
    {
        id:39,
        url: tImage4,
        product :'SAMSUNG Galaxy A52 (Awesome Blue, 128 GB)',
        discount:'39% off',
        oldPrice: '18,999',
        newPrice: 'Rs.12,980'
    },
    {
        id:40,
        url: tImage5,
        product :'SAMSUNG Galaxy A53 8GB RAM (Awesome Blue, 128 GB)',
        discount:'10% off',
        oldPrice: '19,999',
        newPrice: 'Rs.18,999'
    },
    {
        id:41,
        url: tImage6,
        product :'Samsunng a02s (Black, 64 GB)',
        discount:'10% off',
        oldPrice: '20,999',
        newPrice: 'Rs.19,99'
    },
    {
        id:42,
        url: tImage7,
        product :'SAMSUNG Galaxy F12 (Sky Blue, 64 GB)',
        discount:'9% off',
        oldPrice: '21,999',
        newPrice: 'Rs.21,180'
    },
    {
        id:43,
        url: tImage8,
        product :'SAMSUNG Galaxy F13 (Sky Blue, 64 GB)',
        discount:'6% off',
        oldPrice: '22,999',
        newPrice: 'Rs.22,398'
    },
    {
        id:44,
        url: tImage9,
        product :'SAMSUNG Galaxy F41 (Fusion Black, 64 GB)',
        discount:'5% off',
        oldPrice: '19,999',
        newPrice: 'Rs.19,599'
    },
    {
        id:45,
        url: tImage10,
        product :'Samsung Galaxy F53 5G (128 GB Storage)',
        discount:'10% off',
        oldPrice: '21,999',
        newPrice: 'Rs.19,999'
    },
    {
        id:46,
        url: tImage11,
        product :'SAMSUNG Galaxy F62 (Laser Green, 128 GB)',
        discount:'3% off',
        oldPrice: '17,,999',
        newPrice: 'Rs.17,398'
    },
    {
        id:47,
        url: tImage12,
        product :'SAMSUNG Galaxy F42 5G (Matte Aqua, 128 GB)',
        discount:'10% off',
        oldPrice: '29,999',
        newPrice: 'Rs.27,998'
    },
    {
        id:48,
        url: tImage13,
        product :'Samsung Galaxy M62(Beige, 128 GB)',
        discount:'10% off',
        oldPrice: '25,999',
        newPrice: 'Rs.24,999'
    },
    {
        id:49,
        url: tImage14,
        product :'SAMSUNG Galaxy S10 (Prism White, 256 GB)',
        discount:'6% off',
        oldPrice: '59,999',
        newPrice: 'Rs.58,298'
    },
    {
        id:50,
        url: tImage15,
        product :'Samsung Galaxy S21 FE 5G(Navigator Beige, 128 GB)',
        discount:'5% off',
        oldPrice: '41,999',
        newPrice: 'Rs.39,999'
    },
    {
        id:51,
        url: tImage16,
        product :'SAMSUNG Galaxy S22 5G (Green, 128 GB)',
        discount:'6% off',
        oldPrice: '70,900',
        newPrice: 'Rs.67,900'
    },
    {
        id:52,
        url: tImage17,
        product :'SAMSUNG Galaxy S23 FE (Graphite Violet, 256 GB)',
        discount:'3% off',
        oldPrice: '84,999',
        newPrice: 'Rs.83,599'
    },
    {
        id:53,
        url: tImage18,
        product :'SAMSUNG Galaxy S24 Ultra 5G (Titanium Gold, 256 GB)',
        discount:'3% off',
        oldPrice: '114,999',
        newPrice: 'Rs.109,999'
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
               

export default SamsungMobiles;