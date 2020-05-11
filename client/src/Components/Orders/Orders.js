import React from 'react';
import OrderCard from './OrderCard';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { CircularProgress } from '@material-ui/core/';
import { getOrders } from '../Queries/queries';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

// import {graphql} from 'react-apollo';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    flexGrow: 1,
    margin: '20px 40px',
    minHeight: '75vh'
  },
  centerGrid: {
    justifyContent: 'center'
  },
  paper: {
    maxWidth: 800,
    margin: `0px auto`,
  },
}));


function OrderList(props) {
  const classes = useStyles();
  // console.log(props);
  const { auth } = props;
  // const { auth, itemsInCart } = props;
  const loggedin = auth;
  const userId = auth.uid;

  //replace with uid once reservation done
  // const userId = "5eacfbe59ea9fddd9dcd546f";
  const { loading, error, data } = useQuery(getOrders, {
    variables: { userId },
  });
  console.log("R:",data)
  const displayOrders = () => {
    if (loading) {
      return <CircularProgress />;
    } else if (error !== undefined) {
      return <h1 className={classes.centerGrid}>ERROR</h1>;
    } else {
      return data.reservationByUserID.map((order) => {
        return (
          <Grid
            key={order.id}
            className={classes.paper}
            container
            wrap="nowrap"
            spacing={2}
          >
            <Grid item xs zeroMinWidth>
              <OrderCard order={order}></OrderCard>
            </Grid>
          </Grid>
        );
      });
    }
  };

  // const OrderedItems =(itemsInCart) =>{
  //   // console.log(itemsInCart);
  // if(Object.keys(itemsInCart).length===0) return;
  //  return itemsInCart.map((order) => {
  //    return (
  //      <Grid
  //        key={order.id}
  //        className={classes.paper}
  //        container
  //        wrap="nowrap"
  //        spacing={2}
  //      >
  //        <Grid item xs zeroMinWidth>
  //          <OrderCard order={order}></OrderCard>
  //        </Grid>
  //      </Grid>
  //    );
  //  });
  // }
  return (
  loggedin ?
    <div className={classes.root}>
      {displayOrders()}
      {/* { OrderedItems(itemsInCart)} */}
    </div>
    : <Redirect to="/" />
    );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(OrderList);