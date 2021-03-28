import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import "./Btn.css";
import Button from '@material-ui/core/Button';

function Btn() {
    const [isSms, setSms] = useState(true);

const sendSms=()=>{
    if(isSms)
        setSms(false)
    else
        setSms(true)
}
    return (
      <div className="btn__container">
        <Grid container className="btn__GRID">

              <div className="inner">
                {/* <div><Button className="waze-btn"></Button></div>
                <div><Button onClick={sendSms} className="sms-btn"></Button></div>
                <div><Button className="delivered-btn"></Button></div>
                <div><Button className="done-btn"></Button></div> */}
                
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />

                    <div class="container">
                    <div class="row noMargin">
                        <div class="col one">
                        <Button onClick={sendSms} className="sms-btn"></Button>
                        
                        </div>
                        <div class="col two">
                        <Button className="delivered-btn"></Button>
                        </div>
                    </div>
                    <div class="row noMargin">
                        <div class="col three">
                        <Button className="waze-btn"></Button>
                        </div>
                        <div class="col four">
                        <Button className="done-btn"></Button>
                        </div>
                    </div>
                    </div>
          </div>


        </Grid>
      </div>
    );
}

export default Btn
