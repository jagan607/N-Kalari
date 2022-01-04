import React, { Component } from "react";

import LiveVideStream from './components/live-video-streaming'





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ""
    };
  }



  selectChannel = channel => {
    this.setState({ channel });
  };

  render() {
    return (

      <div className="App">

        <LiveVideStream />
    
      </div>

    );
  }
}

export default App;
