import React from 'react'
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import "./MainPage.css"
function MainPage(){
    return (
        <Grid item xs={12} className="HomePageInnerGrid">
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Grid>
    );
}
export default MainPage
