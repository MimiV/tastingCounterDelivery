import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Test.css';
import { Grid, IconButton } from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';
import { IconContext } from 'react-icons/lib';
import SvgIcon from '@material-ui/core/SvgIcon';
import waze from "../../images/waze1.svg";
import { Link, Redirect } from 'react-router-dom';
import banner from "../../images/tastingCounter11.png";

function backupcode(){
    return (
        <div class="main-panel">
        {/* BANNER */}
        <div class="jumbotron jumbotron-sm">
            <div class="banner-container">
                <div class="col-sm-12 col-lg-12">
                    <img className="banner-img" src={banner}></img>
                    <h4 style={{ whiteSpace: "pre-wrap" }} className="h4">DELIVERY 1</h4>
                </div>
            </div>
        </div>
                            {/* CUSTOMER INFO */}
                            <hr className="--colorgraph"></hr>  
                            <div xlassName="sj">
                            <p className="profile-name">Michelle Vasconcelos</p>
                            <p className="profile-type">TC@Home</p>
                       
                            {/* <div className="profile-description"> */}
                            <p className="profile-address">10 Beacon St,Brookline.</p>
                            <p className="profile-phone"> 617-935-7600</p>
                            {/* </div> */}</div>

                            <hr className="--colorgraph"></hr>
                                 {/* ALL BUTTONS */}
{/*                                       
                           <div className="allBts">
                            <div> 
                                <Button className="sms--btn"></Button>
                            <div className="btn--sms"></div>
                               

                                <Button className="delivered--btn"></Button> 
                                
                            </div> 
                            <div class="col--three">
                                <Button className="waze--btn"></Button>
                                <Button className="maps--btn"></Button>
                            </div>
                            </div> */}

                        {Test2}
                        </div>

    )
}


function Test2(){
    return (
        <div>

        <div class="container">
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <div class="material-button-anim">
                  <ul class="list-inline" id="options">
                    <li class="option">
                      <button class="material-button option1" type="button">
                        <span class="fa fa-phone" aria-hidden="true"></span>
                      </button>
                    </li>
                    <li class="option">
                      <button class="material-button option2" type="button">
                        <span class="fa fa-envelope-o" aria-hidden="true"></span>
                      </button>
                    </li>
                    <li class="option">
                      <button class="material-button option3" type="button">
                        <span class="fa fa-pencil" aria-hidden="true"></span>
                      </button>
                    </li>
                  </ul>
                  <button class="material-button material-button-toggle" type="button">
                    <span class="fa fa-plus" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
            </div>
        </div></div>
    )
}


function Test() {
    return (
        <div>

        <div class="container">
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <div class="material-button-anim">
                  <ul class="list-inline" id="options">
                    <li class="option">
                      <button class="material-button option1" type="button">
                        <span class="fa fa-phone" aria-hidden="true"></span>
                      </button>
                    </li>
                    <li class="option">
                      <button class="material-button option2" type="button">
                        <span class="fa fa-envelope-o" aria-hidden="true"></span>
                      </button>
                    </li>
                    <li class="option">
                      <button class="material-button option3" type="button">
                        <span class="fa fa-pencil" aria-hidden="true"></span>
                      </button>
                    </li>
                  </ul>
                  <button class="material-button material-button-toggle" type="button">
                    <span class="fa fa-plus" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
            </div>
        </div></div>
    )
}

export default Test
