import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SecurityIcon from "@material-ui/icons/Security";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import RentForm from "./PDPrentForm";import { Button } from "@material-ui/core";
;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
});

class PDP extends Component {
  render() {
    const grillImg =
      "https://cdn.shopify.com/s/files/1/1205/3574/products/gas-bbq-grill-rentuu-1479788757021_320x.jpg?v=1534508821";
    console.log("PDP");
    return (
      <div>
        <Navbar />
        <Grid
          container
          xs={10}
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={5}>
            <Paper elevation={3}>
              <img src={grillImg} alt="grill img" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            {/* <Paper elevation={3}> */}
            <Typography gutterBottom variant="h5" component="h2">
              Heavy BBQ 585
            </Typography>
            <Typography variant="body2" color="" component="p">
              <WhatshotIcon /> people are looking at this product now
            </Typography>
            <Typography variant="body2" color="" component="p">
              <SecurityIcon /> Find a better price and we will match it
            </Typography>
            <Typography>
              <StarIcon />
              4.5 star Rating
            </Typography>
            <p>Daily Rental Price </p>
            <Typography
              variant="h3"
              color="green"
              component="p"
              className="right"
            >
              $55
            </Typography>
            <RentForm />
            <Button variant="contained" color="primary">
              Rent it
            </Button>
            {/* </Paper> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PDP;
