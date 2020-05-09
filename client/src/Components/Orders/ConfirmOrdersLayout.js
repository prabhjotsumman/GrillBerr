import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
// import Footer from "../Homepage/Footer";
import OrderCard from "./OrderCard";
import { TotalAndCheckout } from "./TotalAndCheckout";

const useStyles = makeStyles((theme) => ({
  layoutRoot: {
    flexGrow: 1,
    padding: "50px",
    backgroundColor: "#0de",
  },
  orderCardContainer: {
    margin: theme.spacing(0),
    maxWidth: "600px",
  },
}));

export function ConfirmOrdersLayout() {
  const classes = useStyles();
  return (
      <div className={classes.layoutRoot}>
        <Grid container alignItems="center" justify="center">
          <Grid item sm={7} md={7} className={classes.orderCardContainer}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </Grid>
          <Grid item sm={5} md={4}>
            <TotalAndCheckout />
          </Grid>
        </Grid>
      </div>
  );
}
