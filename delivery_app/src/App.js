import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage';
import Btn from './Components/Btn/Btn';
import background from './images/background.png';
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Router>
      <Navbar/> 
       <MainPage/>
       
       <Btn></Btn> 
    </Router>
    </div>
  )
}



export default App;
