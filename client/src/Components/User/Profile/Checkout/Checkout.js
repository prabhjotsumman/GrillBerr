import React, { Component } from "react";
import CheckoutForm from "./CheckoutForm";
import { Grid, CssBaseline } from "@material-ui/core";

const styles = {
  container: {
    padding: "10px",
    flexGrow: 1,
    minHeight: "81vh",
  },
};

class Orders extends Component {
  render() {
    return (
      <div style={styles.container}>
        <CssBaseline />
        <Grid container direction="row" justify="center">
          <Grid item xs={12} sm={7}>
            <CheckoutForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Orders;
