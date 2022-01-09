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
            <h1 className="balance">Balance </h1>
            </div>
        )
    }
}
export default Wallet;