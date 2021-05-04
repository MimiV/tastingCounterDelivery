import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css';
import tastingCounter_logo from "../../images/tastingCounter11.png";
import {IconContext} from 'react-icons/lib'
import tastingCounter from "../../images/11.png";
import Button from '@material-ui/core/Button';

function Navbar() {
    const [click,setClick] = useState(false);
    const[button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =()=>setClick(false);

    const showButton = ()=> {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value = {{color:'#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <div className = "tastingCounter-logo" >
                    <img  src={tastingCounter_logo} width = "80 px" style={{marginTop:"8px"}} ></img> 
                    </div>
                     <img src={tastingCounter} width = "200 px"  heigth= "100px" style={{marginTop:"8px",marginRight:"160px"}}></img>
                  
                </Link>
                <div className = "menu-icon" onClick={handleClick}>
                    { click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                   <li className="nav-item">
                       <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                         Home
                       </Link>
                   </li>
                   <li className="nav-item">
                       <Link to='/Current Deliveries' className="nav-links" onClick={closeMobileMenu}>
                           Current Deliveries
                       </Link>
                   </li>
                   <li className="nav-item">
                       <Link to='/delivered' className="nav-links" onClick={closeMobileMenu}>
                           Delivered
                       </Link>
                   </li>
                   <li className="nav-btn">
                       {button ? (
                           <Link to='/sign-up' className ="btn-link" >
                               <Button className="btn--outline">Log Out</Button>
                            </Link>
                       ):(
                           <Link  to='/sign-up'className="btn-link" onClick={closeMobileMenu}>
                               <Button className="btn--outline" >Log Out</Button>
                               {/* <Button className="btn--outline" buttonSize ='btn--mobile'>Log Out</Button> */}
                           </Link>
                       )}
                   </li>
                </ul>
            </div>
            </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar
