import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

export const buttonSizes = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
};

export const buttonSkins = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export default class Button extends Component {

  static displayName = 'atoms/Button';

  static propTypes = {
    size: PropTypes.string,
    skin: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    block: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
    buttonClicked: PropTypes.func,
  };

  static defaultProps = {
    skin: buttonSkins.PRIMARY,
    size: buttonSizes.MD,
    onClick: () => {},
    disabled: false,
    block: false,
    type: 'button'
  };

  constructor (props) {
    super(props)
    this.state = {
      counter:0
    }
  }

  handleClick = () => {
    this.props.buttonClicked();
  };

  render() {
    const { size,
            skin,
            disabled,
            type
          } = this.props;

    return (
      <button
        onClick={ this.handleClick }
        className={
          classNames({
            btn: true,
            large: size === 'lg',
            medium: size === 'md',
            small: size === 'sm',
            extraSmall: size === 'xs',
            primary: skin === 'primary',
            secondary: skin === 'secondary'
          })
        }
        disabled={disabled}
        type={type}
      >
        { this.props.children }
      </button>
    );
  }
}
