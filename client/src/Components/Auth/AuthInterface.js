import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn, signUp } from "../../store/actions/authActions";
import Signin from "./Signin";
import Signup from "./Signup";

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

  handleSignUp = (newUser) => {
    console.log("INF :", newUser);
    this.props.signUp(newUser);
  };
  render() {
    const { authError } = this.props;
    console.log("AUTH_I : ", authError);
    return this.props.mode === "signin" ? (
      <Signin handleLogin={(creds) => this.handleSubmit(creds)} />
    ) : (
      <Signup handleSignUp={(creds) => this.handleSignUp(creds)} />
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthInterface);
