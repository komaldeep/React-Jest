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

  inputFieldValue=(value)=>{
    this.setState({
      inputField: value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <InputText
          name="input field name is"
          type="text"
          placeholder="Enter your name"
          inputValue={this.inputFieldValue}
        />

        <Button
          size={buttonSizes.LG}
          skin={buttonSkins.PRIMARY}
          onClick={this.props.onClick}
        >
          Button Exist HERE
        </Button>

        <WrapperLogin />
      </div>
    );
  }
}

export default App;
