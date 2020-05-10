import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import RentForm from "./PDPrentForm";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  isItemInCart,
} from "../../store/actions/cartActions";

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
  buttons:{
    margin: '0px 10px'
  }
};

class PDP extends Component {
  constructor() {
    super();
    this.state = {
      status: "",
      currentGrill: null,
    };
  }
  componentDidMount() {
    this.props.isItemInCart(this.props.grill);

    const isItemAlreadyInCart = this.props.status; // ADDED, REMOVED, INITIAL
    isItemAlreadyInCart === "ADDED"
      ? this.setState({ status: "ADDED" })
      : this.setState({ status: "REMOVED" });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.status !== prevProps.status) {
      // this.fetchData(this.props.userID);
      this.setState({status: this.props.status})
    }
  }

  handleCart = (data, whatToDo) => {
    console.log(data);

    //check if dates are correctly filled
    switch (whatToDo) {
      case "add":
        this.props.addToCart(data);
        this.setState({ status: "ADDED" });
        break;
      case "remove":
        this.props.removeFromCart(data);
        this.setState({ status: "REMOVED" });
        break;
      default:
        break;
    }
  };

  handleDates = (toFromDates) => {
    console.log("PDP DATES:", toFromDates);
  };
  render() {
    // console.log("PDP Props: ", this.props);
    let currentGrill = this.props.grill || {};
    const grillImg =
      "https://cdn.shopify.com/s/files/1/1205/3574/products/gas-bbq-grill-rentuu-1479788757021_320x.jpg?v=1534508821";
    return (
      <div
        style={{
          flexGrow: 1,
          padding: "0px",
          overflow: "hidden",
          height: "81vh",
        }}
      >
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={8} sm={5} md={5}>
            {/* <Paper elevation={3} >  */}
            <img src={grillImg} alt="grill img" style={styles.image} />
            {/* </Paper> */}
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            {/* <Paper elevation={3}> */}
            <div style={styles.details}>
              <Typography gutterBottom variant="h5" component="h2">
                {currentGrill.name}
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
                ${currentGrill.price}
              </Typography>
              <RentForm
                handleDates={(toFromDates) => this.handleDates(toFromDates)}
              />
              <div style={{ marginTop: "10px" }}>
                {this.state.status === "INTIAL" ||
                this.state.status === "REMOVED" ? (
                  <Button
                    variant="outlined"
                    color="secondary"
                    style={styles.buttons}
                    onClick={() => this.handleCart(currentGrill, "add")}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={styles.buttons}
                      onClick={() => this.handleCart(currentGrill, "remove")}
                    >
                      Remove from Cart
                    </Button>
                    <Link to="/confirmcheckout" style={styles.link}>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={styles.buttons}
                      >
                        Checkout
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemsInCart:
      (state.cart && state.cart.cart && state.cart.cart.itemsInCart) || {},
    status:
      (state.cart && state.cart.cart && state.cart.cart.status) || "INTIAL",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data)),
    removeFromCart: (data) => dispatch(removeFromCart(data)),
    isItemInCart: (data) => dispatch(isItemInCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PDP);