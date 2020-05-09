import React, { Component } from "react";

import { connect } from "react-redux";
import { getCartItems } from "../../store/actions/cartActions";
import { ConfirmOrdersLayout } from "./ConfirmOrdersLayout";

class ConfirmOrders extends Component {
  componentDidMount() {
    this.props.getCartItems();
  }

  render() {
    return <ConfirmOrdersLayout cartItems={this.props.itemsInCart} totalAmount={this.props.totalAmount}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    itemsInCart:
      (state.cart && state.cart.cart && state.cart.cart.itemsInCart) || {},
    totalAmount:
      (state.cart && state.cart.cart && state.cart.cart.totalAmount) || 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCartItems : () => dispatch(getCartItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrders);
