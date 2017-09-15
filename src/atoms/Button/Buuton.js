import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Buuton.css';

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

export default class Buuton extends Component {

  static displayName = 'atoms/Button/Buuton.js';

  static propTypes = {
    size: PropTypes.string,
    skin: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    block: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
  };

  static defaultProps = {
    skin: buttonSkins.PRIMARY,
    size: buttonSizes.MD,
    onClick: () => {},
    disabled: false,
    block: false,
    type: 'button'
  };


  handleClick = () => {
    console.log('ókay click comes here');
  };


  render() {

    return (
      <button
        onClick={ this.handleClick }
        className={
          classNames({
            btn: true,
            large: this.props.size === 'lg',
          })
        }
        disabled={ this.props.disabled }
        type={this.props.type}
      >
        { this.props.children }
      </button>
    );
  }
}
