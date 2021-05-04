import React, { Component } from 'react'
import "./CustomerBox.css"
import CustomerInfo from './CustomerInfo';
import box from "../../images/custInfo.png"

class CustomerBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const customer = ({
            id : 4,
            name : "Iva Vasconcelos",
            type:"TC@ Home",
            address : "92 Beacon Street, Apt 1, Newton, MA 02121",
            phoneNumber : "617-935-7400"
           
        });
        return ( 
            <div class="Main__container">
                 
                 <div class="text_container"> 
               
                    <div class="box">
                   
                        <div class="content">
                        <hr className="colorgraph__" style={{marginTop:"0px"}}></hr> 
                        <h1 style={{textAlign:"center",marginTop:"20px"}}>Delivery  {customer.id}</h1>
                        <div className="info-box">
                            <CustomerInfo 
                            name = {customer.name} 
                            type = {customer.type}
                            address = {customer.address}
                            phoneNumber = {customer.phoneNumber}
                            
                            ></CustomerInfo></div>
                               <hr className="colorgraph__ " style={{marginBottom:"0px"}}></hr>    
                        </div>
                       
                    </div>
                </div>
             </div>
         );
    }
}
 
export default CustomerBox ;
