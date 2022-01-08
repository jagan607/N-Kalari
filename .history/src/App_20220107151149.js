import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Login from './components/Login/Login'
import Wallet from './components/wallet/Wallet'
import {history} from './helpers/history'
import {Router, Route, Routes } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Login></Login>
 
      

      <div>
      
          <Route exact path="/">
           
          </Route>
          

          {/* <Route exact path="/wallet">
            <Wallet/>
          </Route> */}


        
     </div>
     </div>
    );
}
}

export default App;
