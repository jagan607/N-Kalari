import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Wallet from './components/wallet/Wallet'
import {history} from './helpers/history'
import { Router, Route, Routes, Redirect } from "react-router-dom";


const App = () => {
  return (
  
<Router history={history}>
    <div>
    <Routes>
            <Route exact path="/">
              {" "}
              
              <Login />{" "}
            </Route>
            <Route path="/wallet" component={Wallet} />
            </Routes>
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
