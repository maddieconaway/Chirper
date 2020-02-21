import React from 'react';
import './App.css';
import Talkwindow from './components/Talkwindow';
import Saysomething from './components/Saysomething';

class Chirper extends React.Component {
  constructor() {
    super();
    this.state = {
      chat : []
    }
  }

  myCallBack = (dataFromChild) => {
    const obj = {
      id: dataFromChild[0],
      tStamp: dataFromChild[1],
      inputValue: dataFromChild[2],
    };
    this.setState({ chat: [...this.state.chat, obj]});
  }

  render() {
    return (
      <div>
        <h1>CHIRPER!</h1>
        <Talkwindow dataFromParent={this.state.chat}></Talkwindow>
        <Saysomething callbackFromParent={this.myCallBack}></Saysomething>
      </div>
    );
  }
}

export default Chirper;
