import React from 'react'
import { Button } from '../Button/Button';
import{Link} from 'react-router-dom';
import{FaFire} from 'react-icons/fa';
import{BsXDiamondFill} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import "./Page2.css";
function Page2() {
    return (
        <IconContext.Provider value={{color: '#fff', size:64}}>
        <div>
             <div className="pricing__section">
                 <div className="pricing__wrapper">
                         <h1 className="pricing_heading">Pricing</h1>
                         <div className="pricing__container">
                             <Link to="/sign-up" className="pricing__container-card">
                                 <div className="pricing__container-cardInfo">
                                     <div className="icon">
                                         <FaFire/>
                                     </div>
                                     <h3>Starter</h3>
                                     <h4>$8.99</h4>
                                     <p>per month</p>
                                     <ul className="pricing__container-features">
                                         <li>100 Transactions</li>
                                         <li>2% Cash Back</li>
                                         <li>$10,000 Limit</li>
                                     </ul>
                                     <Button buttonSize='btn--wide' buttonColor='primary'>
                                         Choose Plan
                                     </Button>
                                 </div>
                             </Link>
                             <Link to="/sign-up" className="pricing__container-card">
                                 <div className="pricing__container-cardInfo">
                                     <div className="icon">
                                         <BsXDiamondFill/>
                                     </div>
                                     <h3>Gold 29.99</h3>
                                     <h4>3.5</h4>
                                     <p>per month</p>
                                     <ul className="pricing__container-features">
                                         <li>100 Transactions</li>
                                         <li>2% Cash Back</li>
                                         <li>$100,000 Limit</li>
                                     </ul>
                                     <Button buttonSize='btn--wide' buttonColor='primary'>
                                         Choose Plan
                                     </Button>
                                 </div>
                             </Link>
                         </div>
                     </div>
                </div>
        </div>
        </IconContext.Provider>
    )
}

export default Page2
