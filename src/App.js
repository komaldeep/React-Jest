import React, { Component } from 'react';

import Button, {buttonSizes , buttonSkins}  from './atoms/Button/Button.js';
import InputText from './atoms/InputText/InputText';
import './App.css';

import WrapperLogin from './molecules/WrapperLogin/WrapperLogin'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      inputField:'',
    }
  }

  // inputFieldValue=(value)=>{
  //   this.setState({
  //     inputField: value
  //   })
  // }

  render() {
    return (
      <div>
        <div className="App-header App">
          <h2>Welcome to React</h2>
          <h3>Best Practise for writing react components (Atomic design)</h3>
        </div>
        <WrapperLogin />
      </div>
    );
  }
}

export default App;
