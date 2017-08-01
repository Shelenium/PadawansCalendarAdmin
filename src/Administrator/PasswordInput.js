import React, { Component } from 'react';
import manipulateClass from './manipulateClass';


class PasswordInput extends Component {
    constructor(props) {
    super(props);

    this.checkPassword = this.checkPassword.bind(this);
  }

  checkPassword(event) {
    event.preventDefault();
    const passOK = 'PadawansCalendar2017';
    var password = document.getElementById('password').value;
    if (password === passOK) {
      this.props.setTrue();
      manipulateClass('passwordInput','add', 'invisible');
       } else { 
        document.getElementById('password').placeholder = 'Wrong password. Please try again';
        manipulateClass('passwordInput','add', 'alert');
      }
  }

  render() {

  return (
  <div className = 'passwordInput'>
  <header>Welcome, dear Administrator!</header>
  <form className = 'passwordInputForm' onSubmit = { this.checkPassword }>
    <input id = 'password' type = 'password' placeholder = 'Please input your password here' autoFocus/>
    <button className = 'passwordSubmit wide' type = 'submit' >Submit</button>
  </form>
  </div>

      )
  }
}

export default PasswordInput;