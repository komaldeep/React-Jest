import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Label.css';

export const labelOrigins = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
};

export default class Label extends Component {

  static propTypes = {
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
    children: PropTypes.string
  };

  static displayName = 'atoms/Label';

  render() {
    const {
      vertical,
      horizontal,
      children
    } = this.props;

    return (
      <label className={
        classNames({
          vertical: vertical ==='vertical',
          horizontal: horizontal === 'horizontal'
        })
      }>
        { children }
      </label>
    );
  }
}
