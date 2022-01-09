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
      <Router history={history}>
      <div>
      
          <Route exact path="/">
           
          </Route>
          <Login/>

          <Route exact path="/wallet">
            <Wallet/>
          </Route>


        
     </div>
     </Router>
    );
}
}

export default App;
