import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import Button, {buttonSizes , buttonSkins} from './../../atoms/Button/Button';
import InputText from './../../atoms/InputText/InputText';
import Label, { labelOrigins } from './../../atoms/Label/Label'

export default class WrapperLogin extends Component {

  static displayName = 'molecule/WrapperLogin';

  static propTypes = {
    // notificationKey: PropTypes.oneOf(getEnumValues(loginNotifications)),
  };

  loginButton = () => {

  }

  render() {
    return (
      <div>
        <Label
          vertical={labelOrigins.VERTICAL}
        >
          Username
        </Label>
        <InputText
          type="text"
          placeholder="Enter your name"
          inputValue={this.inputFieldValue}
        />

        <Button
          size={buttonSizes.LG}
          skin={buttonSkins.SECONDARY}
          buttonClicked={this.loginButton}
        >
          Submit
        </Button>
      </div>
    );
  }
}
