import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // Link,
} from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";
import AuthInterface from "./Components/Auth/AuthInterface";
import Checkout from "./Components/Checkout/Checkout";
import ConfirmOrders from "./Components/Orders/ConfirmOrders";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Homepage/Footer";
import Orders from "./Components/Orders/Orders";
import PleaseLogin from './Components/DisplayMessage/PleaseLogin';
import { connect } from "react-redux";
import { getCurrentGrill, setCurrentGrill } from "./store/actions/grillActions";
import {
  addToCart,
  removeFromCart,
  isItemInCart,
  getCartItems,
} from "./store/actions/cartActions";

class App extends Component {
  componentDidMount() {
    this.props.getCartItems();
  }

  
  render() {
    // const { user, signOut, signInWithGoogle } = this.props;

    // console.log("_APP:CART_STATUS", this.props.itemsInCart);
    const isAuthenticated = this.props.auth;
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
            <Route
              path="/confirmcheckout"
              render={() =>
                isAuthenticated ? <ConfirmOrders /> : <PleaseLogin />
              }
            />
            <Route
              path="/checkout"
              render={() => (isAuthenticated ? <Checkout {...this.props}/> : <PleaseLogin />)}
            />
            <Route
              path="/orders"
              render={() => (isAuthenticated ? <Orders {...this.props} /> : <PleaseLogin />)}
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
  // console.log("_APP:", state);
  return {
    // currentGrill: state.grill.grill,
    itemsInCart:
      (state.cart && state.cart.cart && state.cart.cart.itemsInCart) || {},
    auth: state.firebase.auth.uid,
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
