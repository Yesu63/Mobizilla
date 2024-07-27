import { useEffect, useState } from "react";
import store from './store.json';
import './styles/Cart.css'
import { useNavigate } from "react-router-dom";
import cartImg from '../public/images/empty_cart.png'
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

function Cart(){

    const [isLoggedin,setIsLoggedIn] = useState(localStorage.getItem("status"));
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName");
    const [cartIds, setCartIds] = useState([]);
    const [amount , setAmount] = useState(0);
    const [quantities, setQuantities] = useState([]);
    const [totalAmount, setTotalAmount] = useState();
    const [address, setAddress] = useState()
    const [mobile, setMobile] = useState()
    const [a, setA] = useState()
    const[ purchaseArray, setPurchaseArray ] =useState([]);
    const [qty, setQty] = useState(0)
    const calculateTotal = (quantities, prices) => {
        let total = 0;
        for(let i = 0; i < quantities.length; i++) {
            total += quantities[i] * parseInt(prices[i]);
        }
        return total;
    }
    
    const increment = (index) => {
        setQuantities(quantities => {
            const newQuantities = [...quantities];
            newQuantities[index]++;
            return newQuantities;
        });
    };
    
    const decrement = (index) => {
        setQuantities(quantities => {
            const newQuantities = [...quantities];
            if(newQuantities[index] > 1) {
                newQuantities[index]--;
            }
            return newQuantities;
        });
    };
    
    useEffect(()=>{
        axios.post("http://127.0.0.1:3002/purchaseDetails/querry",{username:userName}).then(res => {
        setPurchaseArray(res.data.purchaseData)
        }).catch(err => console.log(err))
        // console.log(purchasedQty);
    },[])
    useEffect(() => {
        setAmount(calculateTotal(quantities, oldPrc));
        setTotalAmount(calculateTotal(quantities, newPrc));
        var quantity = 0;
        quantities.map(qtys => {
            quantity = Number(quantity) + Number(qtys);
            setQty(quantity);
});

    }, [quantities]);

    useEffect( () => {
    axios.post("http://127.0.0.1:3002/cart/querry",{userName}).then(res => {
        setCartIds(res.data.cartId)
        setQuantities(new Array(res.data.cartId.length).fill(1));
      }).catch(err => console.log(err))
    },[userName])

    const newPrc = cartIds.map(index=>{
    const str =  store.data[index].newPrice;
    const rpls = str.replace(',','').replace('Rs.','');
    return rpls
    })
    const oldPrc = cartIds.map(index=>{
    const str =  store.data[index].oldPrice;
    const rpls = str.replace(',','').replace('Rs.','');
    return rpls
    })
const clear= async(value)=>{
   await axios.post("http://127.0.0.1:3002/cart/remove",{ userName,cartId:value}).then(result => localStorage.setItem(`${userName}items`, result.data.cartId.length))
      .catch(err=>console.log(err))
      window.location.reload();
      toast.success("Removed from cart")
      window.location.reload();
}
    const checkout = () => {
        if(address !== undefined && mobile !== undefined && document.getElementById("cod").checked){
            const purchase = {
            cartIds: cartIds,
            actualAmount: amount,
            totalAmount: totalAmount
        }
        let newPurchaseArray = [...purchaseArray, purchase];
        setPurchaseArray(newPurchaseArray);
        axios.post("http://127.0.0.1:3002/purchaseDetails", {userName, purchaseData: newPurchaseArray})
            .then(result => console.log(result))
            .catch(err => console.log(err));
        axios.post("http://127.0.0.1:3002/cart/empty", {userName})
            .then(result => {setCartIds([])
            console.log(cartIds.length)
            })
            .catch(err => console.log(err));
        axios.post("http://127.0.0.1:3002/address",{userName:userName , phoneNumber : mobile , address:address})
            .then(result => console.log(result))  
            .catch(err => console.log(err));
             alert("Order Placed Succefully")
             localStorage.setItem(`${userName}items`,0)
             location.reload();
             navigate("/profile")
        }
        else if( !document.getElementById("cod").checked){
            toast.error("Please Confirm the Checkbox")
        }
        else{
            toast.error("Please Provide Valid Phone Number and Address")
        }
    }

    return(
        <>
        {cartIds.length === 0 ? 
        <div className="emptyContainer">
                <img className="emptyImage" src={cartImg} alt="" />
    </div> :
     <><div className="cartContainer">
                    <div className="carts">
                        {cartIds.map((id, index) => (
                            <div key={index} className="cartCard">
                                <img className="cartImage" src={store.data[id].url} alt="" />
                                <p><strong>{store.data[id].product}</strong></p>
                                <p className="mobileText1"><span className='offer'>{store.data[id].discount} </span><del>&nbsp;{store.data[id].oldPrice}</del></p>
                                <p className="mobileText2">{store.data[id].newPrice}</p>
                                <p className="qty">Quantity :<button className="qtyChange" onClick={() => decrement(index)} >-</button> <strong>{quantities[index]}</strong> <button className="qtyChange" onClick={() => increment(index)} >+</button></p>
                                <p className="total">Total Cost :<span className="mobileText2">Rs. {(quantities[index] * parseInt(newPrc[index])).toLocaleString()} </span> </p>
                                <button className="rmvItem" onClick={() => clear(id)}>Remove From Cart</button>
                            </div>
                        ))}
                    </div>
                    <div className="prcDetails">
                        <h2>Price Details</h2>
                        <div className="priceContainer">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Price ({qty}{localStorage.setItem(`${userName}items`, cartIds.length)} Items)</td>
                                    <td>Rs. {amount.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td className="offers">{(((amount - totalAmount) / totalAmount) * 100).toFixed(0)} % Offer</td>
                                </tr>
                                <tr>
                                    <td>Delivery Charge</td>
                                    <td><del className="delivery">40 rps</del> <span className="offers">Free</span></td>
                                </tr>
                                <tr>
                                    <td>Total Amount </td>
                                    <td>Rs. {totalAmount}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="savings">You Will Save <mark>Rs. {(amount - totalAmount).toLocaleString()} </mark>on this Order</p>
                        <label className="cashOn"> &nbsp;&nbsp;Cash On Delivery</label>
                        <input type="checkbox" name="" id="cod"/>
                        <p className="adrsDetails">Address Details</p>
                        <input type="tel"  id="mob" placeholder="10 digit phone number" required  onChange={(e)=>setMobile(e.target.value)} />
                        <textarea className="txtAr" name="" id="" cols="40" rows="5" required placeholder="Door No,Street,Area,District,State-Pincode" onChange={(e)=>setAddress(e.target.value)}></textarea> 
                        <button className="checkoutBtn" onClick={checkout}>Checkout</button> 
                        </div>
                    </div>
                </div><ToastContainer /></>
            }
       </>
    )
}
export default Cart