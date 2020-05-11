import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Homepage from "../Homepage/Homepage";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:'81vh'
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  button: {
    background: "black",
    color: "burlywood",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function PleaseLogin(props) {
  const classes = useStyles();
  const [open] = useState(true);
  // const [open, setOpen] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
      <>
      <Homepage/>
      <div className={classes.root}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          // onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div className={classes.paper}>
             <div style={{ textAlign: "center" }}>
                <h1>Please Login to book grills!</h1>
                </div>
                <Grid container direction="row" justify="space-evenly">
                <Link to="/signin" className={classes.link}>
                  <Button size="small" className={classes.button}>
                    Login
                  </Button>
                </Link>
                <Link to="/" className={classes.link}>
                  <Button size="small" className={classes.button}>
                    Homepage
                  </Button>
                </Link>
              </Grid>
          </div>
        </Modal>
      </div>
      </>
  );
}

export default PleaseLogin;
