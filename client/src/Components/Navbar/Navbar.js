import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { Link as RLink, useLocation } from "react-router-dom";

import {signOut } from '../../store/actions/authActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link:{
      color: "#fff",
      textDecoration :'none'
  },
  button:{
      border: '1px solid #fff',
      marginLeft: '5px',
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  const LoggedIn = props.firebase.auth.uid;
  const location = useLocation();
  // console.log(LoggedIn);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Grillber
          </Typography>
          {!LoggedIn ? (
            <RLink to="/signin" className={classes.link}>
              <Button color="inherit" className={classes.button}>
                Sign in
              </Button>
            </RLink>
          ) : (
            <>
                <Button color="inherit" className={classes.button} onClick={props.signOut}>
                    Sign Out
                </Button>
                {
                    location.pathname !== '/profile' ?
                    <RLink to="/profile" className={classes.link}>
                        <Button color="inherit" className={classes.button}>
                            Profile
                        </Button>
                    </RLink> : ""
                }
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
