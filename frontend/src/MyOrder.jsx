import { useEffect, useState } from "react";
import './styles/MyOrder.css';
import store from './store.json';
import axios from "axios";


function MyOrder(){
    const [userName,setUserName] = useState(localStorage.getItem("userName"));
    const [purchaseArray , setPurchaseArray] = useState([]);

    useEffect(()=>{
        axios.post("http://127.0.0.1:3002/purchaseDetails/querry",{username:userName}).then(res => {
        setPurchaseArray(res.data.purchaseData)
        }).catch(err => console.log(err))
    },[userName])

    return(
       <div className="myOrderContainer">
        <div className="myOrderCont">
        {purchaseArray.map((purchase,index)=>(
                <div  key={index} className="orderDetailsContainer">
                    <div className="orderDet">
                        <h2>Order Details</h2>
                        <p>Total Items : <strong>{purchase.cartIds.length}</strong></p>
                        <p>Actual Purchase Cost : <span className="actAmount">Rs. {purchase.actualAmount.toLocaleString()}</span></p>
                        <p>Discount : <span className="offr">{(((purchase.actualAmount - purchase.totalAmount) / purchase.totalAmount) * 100).toFixed(0)} % Offer</span></p>
                        <p>Total Cost : <strong>{purchase.totalAmount.toLocaleString()}</strong></p>
                   </div> 
                    {purchase.cartIds.map(product=>(
                    <div className="prodDet">
                        <h3>Product Details</h3>
                        <div className="prodContainer">
                            <div className="purchaseImage">
                                <img className="purcImage" src={store.data[product].url} alt="" />
                                <div className="purcdetails">
                                    <p>Product Price :<span className="actAmount">Rs. {store.data[product].oldPrice}</span></p>
                                    <p>Discount :<span className="offr"> {store.data[product].discount} </span></p>
                                    <p>Product Price : <strong>{store.data[product].newPrice}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}  
            </div>
            ))}
        </div>
        </div>
    )
    
}
export default MyOrder;