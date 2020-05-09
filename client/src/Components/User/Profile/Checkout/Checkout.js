import React, { Component } from "react";
import CheckoutForm from "./CheckoutForm";
// import CartItemListView from "./CartItemsListView";
import { Grid, CssBaseline } from "@material-ui/core";

const styles = {
  container: {
    padding: "10px",
    flexGrow: 1,
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
          <CssBaseline />
          <Grid container direction="row" justify="center">
            <Grid item xs={12} sm={7}>
              <CheckoutForm />
            </Grid>
            {/* <Grid item sm={3} xs={12}>
              <CartItemListView />
            </Grid> */}
          </Grid>
        </div>
      </>
    );
  }
}

export default Orders;
