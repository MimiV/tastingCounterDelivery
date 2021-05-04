import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage';
import LoginPage from './Components/LoginPage/LoginPage'
import Delivery from './Components/Delivery/Delivery';

import Page2 from './Components/Page2/Page2';
import CustomerPage from './Components/CustomerPage/CustomerPage';


function App() {
  return (

    // <div style={{ backgroundImage: `url(${background})` }}>
    <div className="background">
      <Router>
         <Navbar></Navbar> 
        {/* <LoginPage></LoginPage> */}
          <CustomerPage></CustomerPage>  
        </Router>
    
      
    {/* <Router>
    <br></br>
   {/* <Delivery></Delivery>  */}
   
         {/* <Test></Test>    */}
        
        {/* <Buttons></Buttons> */}
       {/* <Switch>
         <Route path="/login" component={LoginPage}>

         </Route>
       </Switch> */}
          {/* <LoginPage> </LoginPage>  */}
          {/* <Page2></Page2> */}
 
           {/* <Navbar/>    */}
           {/* <MainPage/>    */}
{/*          
          <Btn></Btn>              */}
        
    {/*</Router> */}
    </div>
  )
}



export default App;
