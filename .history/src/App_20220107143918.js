import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Login from './components/Login/Login'
import Wallet from './components/wallet/Wallet'
import {history} from './helpers/history'
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
  
  <BrowserRouter>
  
    <Routes>
      <Route exact path="/">
        <Login/>
      </Route>
    </Routes>
    
  </BrowserRouter>
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
