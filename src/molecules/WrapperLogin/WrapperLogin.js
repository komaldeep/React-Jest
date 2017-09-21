import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import Button, {buttonSizes , buttonSkins} from './../../atoms/Button/Button';
import InputText from './../../atoms/InputText/InputText';

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
        <Button
          size={buttonSizes.SM}
          skin={buttonSkins.SECONDARY}
          buttonClicked={this.loginButton}
        >
          Submit
        </Button>
      </div>
    );
  }
}
