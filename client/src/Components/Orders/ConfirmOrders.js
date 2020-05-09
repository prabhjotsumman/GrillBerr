import React, { Component } from "react";
// import { makeStyles, Grid } from "@material-ui/core";
// import Footer from "../Homepage/Footer";
// import OrderCard from "./OrderCard";
// import { TotalAndCheckout } from "./TotalAndCheckout";

import { connect } from "react-redux";
import { getCartItems } from "../../store/actions/cartActions";
import { ConfirmOrdersLayout } from "./ConfirmOrdersLayout";

class ConfirmOrders extends Component {
  componentDidMount() {
    this.props.getCartItems();
  }

  render() {
    // const classes = useStyles();
    console.log(this.props.itemsInCart);
    return <ConfirmOrdersLayout cartItems={this.props.itemsInCart} />;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    itemsInCart:
      (state.cart && state.cart.cart && state.cart.cart.itemsInCart) || {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCartItems : () => dispatch(getCartItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrders);
