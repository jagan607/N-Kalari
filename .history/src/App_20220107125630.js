import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Wallet from './components/wallet/Wallet'
import { Router, Route, Switch, Redirect } from "react-router-dom";



function App() {
  return (
    <div className="App">
        <Login></Login>
        <Route path="/wallet" component={Wallet} />
    </div>
  );
}

export default App;
