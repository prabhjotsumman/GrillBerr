import React, { Component } from "react";

import Signin from './Signin';
import Signup from './Signup';

class AuthInterface extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  handleSubmit = (formData) => {
    console.log("in interface");
    console.log(formData);
  };

  //mode = signin /signup

  render() {

    return (
        this.props.mode === 'signin' ?
        <Signin handleLogin={(creds) => this.handleSubmit(creds)} />:
        <Signup/>
    )
  }
}

export default AuthInterface;