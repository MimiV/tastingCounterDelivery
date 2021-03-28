import React from 'react'
import { Button } from '../Button/Button';
import './Home.css';
import sms from "../../images/sms1.png";
import deliveredImg from "../../images/delivered2.png";
import waze from "../../images/waze.png";

function Home({
    lightBg, topLine,lightText,lightTextDesc,customerName,address,type,phoneNumber,imgStart,buttonLabel,buttonLabel1,
    buttonLabel2,buttonLabel3
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>

                <div className="container">
                        <div className = "col">
                        <div className = "home__hero-text-wrapper"> 
                                <div className="top-line">{topLine}</div>
                                <h1 className = {lightText ? 'heading' : 'heading dark'}>{customerName}</h1>
                                <h1 className = {lightText ? 'heading' : 'heading dark'}>{address}</h1>
                                <h1 className = {lightText ? 'heading' : 'heading dark'}>{type}</h1>
                                <h1 className = {lightText ? 'heading' : 'heading dark'}>{phoneNumber}</h1>
                            
                                <div className="test4">
                                    <Button className="test3"><img src={sms}></img></Button>
                                    <Button className="test5"><img src={deliveredImg}></img></Button>
                                </div>
                                
                                <div className="delivered_btn">
                                    <Button><img src={waze}></img></Button>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Home
