import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Login from './components/Login/Login'
import Wallet from './components/wallet/Wallet'
import {history} from './helpers/history'
import { BrowserRouter, Router, Route, Routes, Redirect } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router history={history}>
      <div className="App">
      
        <Routes>
          <Route exact path="/">
            <Login/>
          </Route>
        </Routes>
        
     </div>
     </Router>
    );
}
}


// function App() {
//   return (
//     <div className="App">
//        <Route exact path="/">
//        <Login></Login>
//     </Route>
        
//         <Route path="/wallet">
//           <Wallet></Wallet>
//           </Route>
//     </div>
//   );
// }

export default App;
