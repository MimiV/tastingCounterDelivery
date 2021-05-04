import React from 'react'
import "./CustomerInfo.css"
import box from "../../images/custInfo.png"
function CustomerInfo(props) {
    return (
        <div class="customer_container">
            <div class="row">
                <div class="col">
                    Name
                </div>
                <div class="col">
                    {props.name}
                </div> 
            </div>
             <div class="row">
                <div class="col">
                    Type
                </div>
                <div class="col">
                    {props.type}
                </div>
            </div> 
            <div class="row">
                <div class="col">
                    Address
                </div>
                <div class="col">
                    {props.address}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Phone Number
                </div>
                <div class="col">
                    {props.phoneNumber}
                    </div>
                </div>
            </div>
    )
}

export default CustomerInfo
