import img1 from './assets/vivoBrand.png'
import img3 from './assets/samsungBrand.png'
import img2 from './assets/oppoBrand.png'
import img4 from './assets/realmeBrand.png'
import './styles/MobileBrands.css'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function MobileBrands(){
    const responsive = {
       largeDesktop :{
        breakpoint: {max: 2560, min:1441},
        items: 6
       },
        desktop: {
          breakpoint: { max: 1440, min: 992 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 991, min: 481 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 2
        }
      };
      
    return(
        <div className='featureBrandsContainer'>
        
        <h4 className='heading'>FEATURED MOBILE BRANDS</h4>
        <div className="carousals">
        <Carousel responsive={responsive} swipeable={true}>
        
            <div className='brandsCard'>
                <img src={img1} className='brandImage'></img>
                <p className='brandText'>Vivo Mobiles</p>
                <Link to="/vivo"><button className='viewAll'>View All</button></Link>
            </div>
            <div className='brandsCard'>
                <img src={img2} className='brandImage'></img>
                <p className='brandText'>Oppo Mobiles</p>
                <Link to='/oppo'><button className='viewAll'>View All</button></Link>
            </div>
            <div className='brandsCard'>
                <img src={img3} className='brandImage'></img>
                <p className='brandText'>Samsung Mobiles</p>
                <Link to='/samsung'><button className='viewAll'>View All</button></Link>
            </div>
            <div className='brandsCard'>
                <img src={img4} className='brandImage'></img>
                <p className='brandText'>Realme Mobiles</p>
                <Link to='/realme'><button className='viewAll'>View All</button></Link>
            </div>
        </Carousel>
        </div>
        </div>
    );
}
export default MobileBrands;