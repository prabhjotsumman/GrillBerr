import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
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
    minHeight: "550px",
    maxHeight: '562px',
    overflowY: 'scroll',
    backgroundColor: "#fff"
  },
}));

export function ConfirmOrdersLayout(props) {
  const { cartItems, totalAmount } = props;
  const classes = useStyles();
  return (
    <div className={classes.layoutRoot}>
      <Grid container alignItems="center" justify="center">
        <Grid item sm={7} md={7} className={classes.orderCardContainer}>
          {cartItems && cartItems.length > 0
            ? cartItems.map((order) => {
                return <OrderCard {...order} key={order.id} />;
              })
            : ""}
        </Grid>
        <Grid item sm={5} md={4}>
          <TotalAndCheckout totalAmount={totalAmount}/>
        </Grid>
      </Grid>
    </div>
  );
}