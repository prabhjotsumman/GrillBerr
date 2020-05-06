import React from "react";
import { makeStyles, CssBaseline, Grid } from "@material-ui/core";
import Backgroundimg from "../../assets/grill.jpg";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "35vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${Backgroundimg})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "20px",
  },
  paper: {
    margin: "auto",
    textAlign: "center",
    color: "#ffcc13",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <Grid componene="main" className={classes.image}>
      <CssBaseline />
      {/*<div className={classes.paper}>
          <Typography variant="h4" align="center">
            Grillber - Book Your BBQ now!
          </Typography>
        </div> */}
    </Grid>
  );
}
