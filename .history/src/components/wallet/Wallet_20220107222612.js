import React, { Component } from "react"
import styles from './index.css';  

class Wallet extends Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div>
                 <h1 className="heading">Wallet</h1>
                <div className="left">
                    <div className="balance">
                        <h1 className="balance-heading">Balance </h1>
                        <h1 className="balance-value">5000</h1>
                    </div>
                <div className="buttons">
                    <button className="withdraw">Withdraw</button>
                    <button className="recharge">Recharge</button>

                </div>
                </div>
                <div className="right">
                    <div className="recent-transactions">

                    </div>
                </div>
            </div>

        )
    }
}

function mapState(state) {
    console.log("state", state);
    const { transactions } = state;
    return { transactions };
  }
  
  const actionCreators = {
    getTransactions: userActions.getTransactions,
  };
  
  const HomePage = connect(mapState, actionCreators)(Home);
export default Wallet;