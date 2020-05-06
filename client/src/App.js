import React, { Component } from "react";
// import SignInSide from "./Components/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Profile from './Components/User/Profile/Profile';
import AuthInterface from './Components/Auth/AuthInterface';
import PDP from './Components/Product/PDP';
import Checkout from './Components/User/Profile/Checkout/Checkout';

// import withFirebaseAuth from "react-with-firebase-auth";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebase/firebaseconfig";

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
//   emailAuthProvider: new firebase.auth.EmailAuthProvider()
// };
  
class App extends Component {
  render() {
    // const { user, signOut, signInWithGoogle } = this.props;

    return (
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route
          path="/signin"
          render={(props) => <AuthInterface {...props} mode="signin" />}
        />
        <Route
          path="/signup"
          render={(props) => <AuthInterface {...props} mode="signup" />}
        />
        <Route path="/bbq" component={PDP}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/profile" component={Profile}/>
      </Router>
    );
  }
}

export default App;
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);
