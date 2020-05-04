import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";

import RentForm from "./PDPrentForm";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
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
  fire_under: {
    width: "25px",
    verticalAlign: "middle",
    marginBottom: "10px",
    display: "inline-block",
  },
  better_image: {
    maxWidth: "23px",
    display: "inline-block",
    verticalAlign: "middle",
  },
  star: {
    color: "#fc9934",
  },
  image: {
    maxHeight: "60%",
    maxWidth: "100%",
  },
  details: {
    padding: "5px",
  },
};

class PDP extends Component {
  render() {
    const grillImg =
      "https://cdn.shopify.com/s/files/1/1205/3574/products/gas-bbq-grill-rentuu-1479788757021_320x.jpg?v=1534508821";
    return (
      <div style={{ flexGrow: 1, padding: "0px", overflow: "hidden" }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={12} sm={12}>
            <Navbar />
          </Grid>
          <Grid item xs={8} sm={5} md={5}>
            {/* <Paper elevation={3} >  */}
            <img src={grillImg} alt="grill img" style={styles.image} />
            {/* </Paper> */}
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            {/* <Paper elevation={3}> */}
            <div style={styles.details}>
              <Typography gutterBottom variant="h5" component="h2">
                Heavy BBQ 585
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                <img
                  style={styles.fire_under}
                  alt="fire"
                  src="//cdn.shopify.com/s/files/1/1205/3574/t/5/assets/fire1.png?v=9267698999827821686"
                />
                People are looking at this product now
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                <img
                  style={styles.better_image}
                  src="//cdn.shopify.com/s/files/1/1205/3574/t/5/assets/shield.png?v=5907784283810246242"
                  alt="shild"
                />{" "}
                Find a better price and we will match it
              </Typography>
              <Typography>
                <StarIcon style={styles.star} />
                4.5 star Rating
              </Typography>
              <p>Daily Rental Price </p>
              <Typography
                variant="h3"
                component="p"
                color="textPrimary"
                className="right"
              >
                $55
              </Typography>
              <RentForm />
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <Link to="/checkout" className={styles.link}>
                  <Button variant="outlined" color="primary">
                    Rent it Now!
                  </Button>
                </Link>
              </div>
              {/* </Paper> */}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PDP;
