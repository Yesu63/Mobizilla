import './styles/Return.css'
import returnImg from './assets/return.jpg'
import Footer from './Footer';
import KnowUs from './KnowUs';
function Return(){
    return(
        <>
        <div className="returnPolicy">
            <img  className="returnImg" src={returnImg} alt="" />
            <h3>CANCELLATION AND RETURN POLICY</h3>
            <nav className='returnNav'>
                <ul type='square' className='returnList'>
                    <li><a href="#">Applicability of Policy</a></li>
                    <li><a href="#policy">Cancellation of Products</a></li>
                    <li><a href="#cancelation">Replacement or Exchange of Products</a></li>
                    <li><a href="#replace">Return</a></li>
                    <li><a href="#refund">Refund</a></li>
                    <li><a href="#support">Customer Support</a></li>  
                </ul>
            </nav>
            
            <div id="policy">
                <h3>Applicability of Policy</h3>
                <nav>

                <ul className='returnLists'>
                    <li>By agreeing to use the Mobizilla Platform and/or initiating a request for purchase of Product(s) on the Mobizilla Platform, you agree to be bound by the terms contained in this Policy without modification. </li>
                    <li>Please note that we may from time to time change the terms of the Policy that govern your cancellation, replacement, return and refund of an order for Products on the Mobizilla Platform.</li>
                </ul>
                </nav>
            </div>
            <div id="cancelation">
                <h3>Cancellation of Products</h3>
                <nav>
                    <ul className='returnLists'>
                        <li><p>You can cancel orders for Products partially or fully prior to the shipment is “Out for Delivery”. Orders cannot be cancelled once the package is “Out for Delivery”.</p></li>
                        <li><p>In case you change your mind in relation to a particular order of the Product(s), you may cancel the placed purchase order on Platform under “My Orders” section of your account.</p></li>                        
                    </ul>
                </nav>
            </div>
            <div id="replace">
                <h3>Replacement or Exchange of Products</h3>
                <nav>
                    <ul className='returnLists'>
                        <li><p>You may initiate the request for replacement of the Product within 5 days from the time the Product(s) is delivered to you "Replacement Period"</p></li>
                        <li><p>Product is received in a physical damaged condition, to be reported to us within 24 hours of delivery or before activation of products </p></li>
                        <li><p>Product or parts of the Product or accessory is missing, to be reported to us within 24 hours of delivery or before activation of the products</p></li>
                    </ul>
                </nav>
            
            </div>
            <div id="return">
                <h3>Return</h3>
                <nav>
                    <ul className='returnLists'>
                        <li><p>The Product delivered has any physical damage, have a missing part or are different from what was ordered basis the Product description on Reliance Digital Platform, you are required to contact Reliance Digital customer care to intimate of any physical damage, missing or wrong product etc., within 24 hours of delivery.</p></li>
                        <li><p>Product was found defective or is dead on arrival; You are required to contact Mobizilla customer care to intimate about any defect or non-functionality condition of the Product i.e., if the Product delivered is dead on arrival (DOA). Product being reported under defective/DOA cases, the return will be processed subject to verification as per the terms of this Policy.</p></li>
                    </ul>
                </nav>
            </div>
            <div id="refund">
                <h3>Refund</h3>
                <nav>
                    <ul className='returnLists'>
                        <li><p>Please be informed that when you opt to cancel or return the Products, upon our verification and assessment of the Products and the documents relating thereto, the refund amount for such Products which are eligible for return as per the terms of this Policy, will be processed within 48 (forty eight) hours from the date of us receiving the returned Product back at our warehouse.</p></li>
                        <li><p>Please refer below table to understand mode of refund as per our discretion for different Payment Types:</p>
                        <table border="2">
                            <thead>
                                <tr>
                                    <th>MODE OF PAYMENT</th>
                                    <th>MODE OF REFUND</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Credit Card</td>
                                    <td>Credit Card</td>
                                </tr>
                                <tr>
                                    <td>Debit Card</td>
                                    <td>Debit Card</td>
                                </tr>
                                <tr>
                                    <td>Net Banking</td>
                                    <td>Net Banking</td>
                                </tr>
                                <tr>
                                    <td>Cash on Delivery</td>
                                    <td>Store- Credit</td>
                                </tr>
                            </tbody>
                        </table>
                        </li>
                    </ul>
                </nav>
                </div>
            <div id="support">
                <h3>Customer Support</h3>
                <ul className='returnLists'>
                    <li>Any queries or concerns relating to the cancellation, replacement, return and refund may be directed by you to our customer support team who can be contacted at:</li>
                </ul>
                <p> <strong>Email</strong>:mobizilla@mob.com</p>
                <p><strong>Phone Number</strong>:1800 889 1055  (9:30 AM to 7:30 PM)</p>
            </div>
            <a href="#" className='move2top'><p>Move to Top</p></a>
        </div>
        <KnowUs/>
        <Footer/>
        </>
    );
}
export default Return