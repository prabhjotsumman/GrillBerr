import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn } from "../../store/actions/authActions";
import Signin from './Signin';
import Signup from './Signup';

class AuthInterface extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  handleSubmit = (formData) => {
    // console.log("in interface");
    // console.log(formData);
    this.props.signIn(formData);
  };

  render() {
    const {authError} = this.props;
    console.log("AUTH_I : ",authError);
    return (
        this.props.mode === 'signin' ?
        <Signin handleLogin={(creds) => this.handleSubmit(creds)} />:
        <Signup/>
    )
  }
}
const mapStateToProps = (state) =>{
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthInterface);