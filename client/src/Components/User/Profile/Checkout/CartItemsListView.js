import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    // alignContent: 'center'
  },
  paper: {
    // margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    // padding: "10px",
  },
  cartItem: {
    padding: "10px",
    color: "#231e20",
    //   display:'block',
    //   width:'100%'
  },
  title: {
    padding: "10px",
  },
  total: {
    backgroundColor: "#dede",
    padding: "10px",
  },
}));

export default function CartItemListView() {
  const classes = useStyles();
  return (
    <Grid
      container
      component={Paper}
      elevation={6}
      square
    //   spacing={2}
      className={classes.root}
    >
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Typography
          variant="h5"
          component="p"
          color="secondary"
          align="center"
          className={classes.title}
        >
          Your Cart
        </Typography>
        <Divider variant="fullWidth" />
        <Grid container direction="row" justify="space-between">
          <Grid item className={classes.cartItem}>
            <Typography variant="body1" align="center" component="p">
              Heavy BBQ 50
            </Typography>
          </Grid>
          <Grid item className={classes.cartItem}>
            <Typography variant="h6" component="p" align="right">
              $75.25
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
        <Grid container direction="row" justify="space-between">
          <Grid item className={classes.cartItem}>
            <Typography variant="body1" align="center" component="p">
              Heavy BBQ 50
            </Typography>
          </Grid>
          <Grid item className={classes.cartItem}>
            <Typography variant="h6" component="p" align="right">
              $75.25
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
        <Grid container direction="row" justify="space-between">
          <Grid item className={classes.cartItem}>
            <Typography variant="body1" align="center" component="p">
              Heavy BBQ 50
            </Typography>
          </Grid>
          <Grid item className={classes.cartItem}>
            <Typography variant="h6" component="p" align="right">
              $75.25
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
        <Grid
          container
          direction="row"
          justify="space-between"
          className={classes.total}
        >
          <Grid item>
            <Typography variant="h6" align="center" component="p">
              Total (USD)
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="p" align="right">
              $220.75
            </Typography>
          </Grid>
        </Grid>
        {/* <Divider variant="middle" /> */}
      </div>
    </Grid>
  );
}
