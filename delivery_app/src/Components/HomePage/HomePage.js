import React from 'react'
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Home from '../Home/Home'
import Page2 from '../Page2/Page2'

import{homeObjOne} from './Data'

function HomePage() {
    return (
        <>
          <CustomerInfo {...homeObjOne} ></CustomerInfo>
          
        </>
    );
}

export default HomePage
