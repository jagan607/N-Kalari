import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Wallet from './components/wallet/Wallet'
import {history} from './helpers/history'
import { Router, Route, Routes, Redirect } from "react-router-dom";


const App = () => {
  
  <BrowserRouter>
  
    <Routes>
      <Route exact path="/" element={<Login />}>
        <Home/>
      </Route>
    </Routes>
    
  </BrowserRouter>
 
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
