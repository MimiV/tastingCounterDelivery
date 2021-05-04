import React, { Component } from 'react';
import CustomerBox from './CustomerBox';
import "./CustomerPage.css"
import RevealBtn from './RevealBtn';

/**
 * 
 * HERE IS THE CUSTOMER PAGER
 */

class CustomerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {/** Customer box top and Button */}
                <CustomerBox></CustomerBox>
                <RevealBtn></RevealBtn>
            </div>
         );
    }
}
 
export default CustomerPage;