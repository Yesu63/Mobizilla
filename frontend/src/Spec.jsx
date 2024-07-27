import React, { useEffect, useState } from 'react';
import './styles/Slider.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import store from "./store.json"
import './styles/Specification.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import KnowUs from './KnowUs';
import Footer from './Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Spec(){
  const products=[];
  const navigate = useNavigate();
    const [spec,setSpec] = useState(0);
    const [cartArray , setCartArray] = useState([])
    const [isLoggedin,setIsLoggedIn] = useState(localStorage.getItem("status"));
    const [userName,setUserName] = useState(localStorage.getItem("userName"));
    const [offerPrice, setOfferPrice] = useState(0);
    const {id} = useParams();
    const price = store.data[id].newPrice;
    let incremented = false;
    let decremented = false;
    const temp = price.replace(',','').replace('Rs.','');
    useEffect(() => {
        setSpec(store.data[id]);
        setOfferPrice(price.replace(',','').replace('Rs.',''))
        axios.post("http://127.0.0.1:3002/cart/querry",{userName}).then(res => {
          setCartArray(res.data.cartId)
        }).catch(err => console.log(err))
    }, [id])

    const handleIncrement = () => {
    if (!incremented) {
        setOfferPrice(3000 + parseInt(offerPrice));
        incremented = true;
      }
    }

    const handleDecrement = () => {
    if (!decremented) {
        setOfferPrice(parseInt(offerPrice) - 3000);
        decremented = true;
      }
    }

   const buynow=(index)=>{
    if(isLoggedin){
      navigate("/cart")
    }else{
      toast.error("Login First")
    }
   }

    const authenticationCheck = (productId)=>{
      if (!cartArray.includes(productId)) {
        setCartArray(cartArray => [...cartArray, productId])
        isLoggedin ? 
          axios.post("http://127.0.0.1:3002/cart",{ userName,cartId:[...cartArray,productId]}).then(result => {
           // console.log(result)
            let count=0;
            while(result.data.cartId[count] !== undefined){
              count++;
            }
            localStorage.setItem(`${userName}items`, count)
          })
          .catch(err=>console.log(err)) 
          : toast.error("login first");
          if(isLoggedin){
            toast.success("cart succesfull");
            window.location.reload()
          } 
      }else {
          alert("Product already in cart");
    }
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return(
      <>
        <div className='bothContainer'>
          <div className='leftContainer'>
            <div className='slide'>
              <Carousel responsive={responsive}>
                <div><img  className="specImage" src={spec.url} alt=""  /></div>
                <div><img  className="specImage" src={spec.url2} alt=""  /></div>
                <div><img  className="specImage" src={spec.url3} alt=""  /></div>
            </Carousel>
          </div>
          <button className='addToCart' onClick={()=>authenticationCheck(spec.prodctId)}>ADD TO CART</button>
          <button className='buyNow' onClick={()=>buynow(spec.prodctId)}>BUY NOW</button>
         </div>
        <div className='rightContainer'>
           <h2>{spec.product}</h2>
            <p className='off'>Offer Price : <span className="offPrice">{offerPrice.toLocaleString()}</span></p>
            <p className="mobileText1"><span className='offer'>{spec.discount}</span> &nbsp;&nbsp;<del>{spec.oldPrice}</del></p>
            <p className='storage'>Storage / Variants <span className='variant' onClick={handleDecrement} >{spec.rom=="128 GB"? "128GB" : "64GB" }  </span>  &nbsp;<span className='variant'  onClick={handleIncrement} >{spec.rom=="128 GB"? "256GB" : "128GB" }</span></p>
            <p className='productDescribtion'>{spec.description}</p>
            <div className='allSpecs'>
              <div className='highlights'>
                <p className='heading'>Heighlights</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Memory&nbsp;&nbsp;&nbsp;</td>
                      <td>{spec.ram}  RAM | {spec.rom} GB ROM</td>
                    </tr>
                    <tr>
                      <td>Display&nbsp;&nbsp;&nbsp;</td>
                      <td>17.22 cm (6.78 inch) Full HD+ Display</td>
                  </tr>
                  <tr>
                    <td>Camera&nbsp;&nbsp;&nbsp;</td>
                    <td>{spec.camera} + 2MP | 16MP Front Camera</td>
                  </tr>
                  <tr>
                    <td>Battery&nbsp;&nbsp;&nbsp;</td>
                    <td>{spec.battery} mAh Battery</td>
                </tr>
                <tr>
                  <td>Processor&nbsp;&nbsp;&nbsp;</td>
                  <td>Dimensity 7200 Processor</td>
                </tr>
              </tbody>
           </table>
           </div>
              <div className='payment'>
                <p className='heading'>Easy Payment Option</p>
                <ul>
                  <li>No cost EMI starting from ₹8,333/month</li>
                  <li>Cash on Delivery</li>
                  <li>Net banking & Credit/ Debit/ ATM card</li>
                </ul>
            </div>
            <div className='replace'>
              <p className='heading'>Replacement</p>
                <ul>
                  <li>All accessories, product & packaging need to be returned in original condition.</li>
                  <li>7 Days Service Center Replacement/Repair</li>
                  <li>For return eligibility.<Link to='/return'>Read-T&C</Link></li>
                </ul>
            </div>
            <div className='warranty'>
              <p className='heading'>Warranty</p>
                <ul type='square'>
                  <li>Warranty: 1 Year manufacturer warranty</li>
                  <li>Service: 2 Year Service warranty</li>
                </ul>
            </div>
           </div>
           <button className='addToCartMobile' onClick={()=>authenticationCheck(spec.prodctId)}>ADD TO CART</button>
           <button className='buyNowMobile' onClick={()=>buynow(spec.prodctId)}>BUY NOW</button>
          </div>
        </div>
        <ToastContainer></ToastContainer>
        <KnowUs/>
        <Footer/>
      </>
    )
}

export default Spec






