import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputText.css';

export default class InputText extends Component {

  // static displayName = 'atoms/InputText';
  //
  // static propTypes = {
  //   value: PropTypes.string,
  //   updateValue: PropTypes.string,
  //   name: PropTypes.string,
  //   id: PropTypes.string,
  //   type: PropTypes.string,
  //   placeholder: PropTypes.string,
  //   handleChange: PropTypes.func,
  //   onKeyPress: PropTypes.func,
  //   maxLength: PropTypes.number,
  //   disableDeleteButton: PropTypes.bool,
  // };
  //
  // static defaultProps = {
  //   type: 'text',
  //   placeholder: '',
  //   disabled: false,
  //   showSuccess: false,
  //   showError: false,
  //   pending: false,
  //   focus: false,
  //   maxLength: 9999,
  // };

  constructor(props) {
    super(props);
    this.keepFocus = false;
    this.state = {
      value: props.value,
    };
  }

  handleOnChangeValue = () => {

  }

  render() {
    const {
      name,
      type,
      placeholder,
      disabled,
      id,
      showError,
      showSuccess,
      onKeyPress,
      maxLength,
      disableDeleteButton,
    } = this.props;

    return (
      <div className="wrap">
        <input
          type={type}
          name={name}
          id={id}
          value={this.state.value}
          placeholder={placeholder}
          ref={(input) => { this.inputField = input; }}
          className={
            classNames({
              input: true,
            })
          }
          disabled={disabled}
          onKeyPress={onKeyPress}
          maxLength={maxLength}
          onChange={this.handleOnChangeValue}
        />
      </div>
    );
  }
}
