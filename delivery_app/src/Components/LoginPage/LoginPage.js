import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css"
import Button from '@material-ui/core/Button';

function LoginPage() {
    // const containerSyle = {
    //     "fontWeight": "bold",
    //     "color": "#0385f6",
    //     "textTransform":"none",
    //     "margin-left": "-5px",
    //     "margin-top": "-1.5px"
    // }
    return (
        <div className="login-container">
            <div className = "login-row" style={{marginTop:"20px"}}>
            <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3"    >
                <form className="page">
                    <h2 style={{fontSize:"30px"}}>Login</h2>
                    <hr className="colorgraph"></hr>
                    <div class="form-group">
                    <input type="email"  class="form-control input-lg" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" placeholder="Email Address" ></input>
                           </div>
                           <div class="form-group">
                        <input type="password" id="password" class="form-control input-lg" placeholder="Password"></input> 
                    </div>
                  <hr className="colorgraph"></hr>
                   <Button class="forgotPass">Forgot Password</Button>
                
                      <div class="signIn-register">
                          <div class="two-btn">
                        <Button class="signInBtn">Sign In</Button>
                        <Button class="registerBtn">Register</Button>
                      </div>
                     </div>
                </form>
               </div>
            </div>
            </div>
    )
}

export default LoginPage