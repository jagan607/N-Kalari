import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Login from './components/Login/Login'
import {WalletPage} from './components/wallet/Wallet'
import {history} from './helpers/history'
import {Router, Route, Routes } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {/* <Login></Login> */}

        <WalletPage></WalletPage>
 
          {/* <Route exact path="/">
          </Route> */}
          {/* <Route exact path="/wallet">
            <Wallet/>
          </Route> */}
     </div>
    );
}
}

export default App;
