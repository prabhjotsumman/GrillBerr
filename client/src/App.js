import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";
// import Profile from "./Components/User/Profile/Profile";
import AuthInterface from "./Components/Auth/AuthInterface";
import Checkout from "./Components/User/Profile/Checkout/Checkout";
import ConfirmOrders from "./Components/Orders/ConfirmOrders";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Homepage/Footer";
import Orders from "./Components/Orders/Orders";
import { connect } from "react-redux";
import { getCurrentGrill, setCurrentGrill } from "./store/actions/grillActions";
import {
  addToCart,
  removeFromCart,
  isItemInCart,
  getCartItems,
} from "./store/actions/cartActions";
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
  componentDidMount() {
    this.props.getCartItems();
  }
  render() {
    // const { user, signOut, signInWithGoogle } = this.props;

    // console.log("_APP:CART_STATUS", this.props.itemsInCart);

    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Homepage {...this.props} />}
            />
            <Route
              path="/signin"
              render={(props) => <AuthInterface {...props} mode="signin" />}
            />
            <Route
              path="/signup"
              render={(props) => <AuthInterface {...props} mode="signup" />}
            />
            <Route path="/confirmcheckout" component={ConfirmOrders} />
            <Route path="/checkout" component={Checkout} />
            <Route
              path="/orders"
              render={(props) => <Orders {...this.props} />}
            />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("APP:", state);
  return {
    // currentGrill: state.grill.grill,
    itemsInCart:
      (state.cart && state.cart.cart && state.cart.cart.itemsInCart) || {},
    // status:
    //   (state.cart && state.cart.cart && state.cart.cart.status) || "INTIAL",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentGrill: () => dispatch(getCurrentGrill()),
    addToCart: (data) => dispatch(addToCart(data)),
    removeFromCart: (data) => dispatch(removeFromCart(data)),
    isItemInCart: (data) => dispatch(isItemInCart(data)),
    getCartItems: () => dispatch(getCartItems()),
    setCurrentGrill: (grill) => dispatch(setCurrentGrill(grill)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
