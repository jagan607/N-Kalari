import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Wallet from './components/wallet/Wallet'
import { Router, Route, Switch, Redirect } from "react-router-dom";


const App = () => {
  return (
  

    <div>
  <Route exact path="/">
      <Login />
    </Route>
      <Route path="/wallet" component={Wallet} />
  </div>

 
  );
};


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
