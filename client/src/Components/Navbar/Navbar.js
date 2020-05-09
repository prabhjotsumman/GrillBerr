import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link as RLink } from "react-router-dom";

import {signOut } from '../../store/actions/authActions';
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "black",
  },
  title: {
    flexGrow: 1,
    color: "#ffb100",
    textDecoration: "none",
    fontFamily: "'Satisfy', 'cursive'",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    border: "1px solid #ffb100",
    color: "#ffb100",
    marginLeft: "5px",
    "&:hover": {
      backgroundColor: "#ffb100",
      borderColor: "#ffb100",
      color: "#000",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ffb100",
      color: "fff",
      borderColor: "#ffb100",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
  icon: {
    color: "#ffb100",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const LoggedIn = props.firebase.auth.uid;
  // const location = useLocation();
  // console.log(LoggedIn);
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent" className={classes.appbar}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <OutdoorGrillIcon fontSize="large" className={classes.icon}/>
          </IconButton> */}
          {/* <RLink to="/" clasName={classes.link}>  */}
            <Typography variant="h4" className={classes.title}>
              Grillber
            </Typography>
          {/* </RLink> */}
          {!LoggedIn ? (
            <RLink to="/signin" className={classes.link}>
              <Button color="inherit" className={classes.button}>
                Sign in
              </Button>
            </RLink>
          ) : (
            <>
              <Button
                color="inherit"
                className={classes.button}
                onClick={props.signOut}
              >
                Sign Out
              </Button>
              {/* {location && location.pathname !== "/profile" ? (
                <RLink to="/profile" className={classes.link}>
                  <Button color="inherit" className={classes.button}>
                    Profile
                  </Button>
                </RLink>
              ) : (
                ""
              )} */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("NAVBAR:",state);
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
