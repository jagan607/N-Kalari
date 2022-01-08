import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Wallet from './components/wallet/Wallet'
import {history} from './helpers/history'
import { Router, Route, Switch, Redirect } from "react-router-dom";


const App = () => {
  return (
  
<Router history={history}>
    <div>
    <Switch>
            <PrivateRoute exact path="/">
              {" "}
              
              <Login />{" "}
            </PrivateRoute>
            <Route path="/wallet" component={Wallet} />
            </Switch>
  </div>
  </Router>

 
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
