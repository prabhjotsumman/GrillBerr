import React, { Component } from "react";
import CheckoutForm from "./CheckoutForm";

const styles = {
  container: {
    padding: "10px",
  },
};

class Orders extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log("Checkout PAGE");
    return (
      <>
        <div style={styles.container}>
            <CheckoutForm/>
        </div>
      </>
    );
  }
}

export default Orders;
