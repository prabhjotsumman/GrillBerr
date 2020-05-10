import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Site Developed by Grillber Developers
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexDirection: "column",
    // minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 3),
    // marginTop: "20px",
    backgroundColor: "black",
    // borderBottom: '1px solid #000',
    color: "#ffb100",
    width: '100%',
    bottom: '0px',
    left: '0px',
    position: 'sticky',
    // position: fixed;
    // height: '100%',
    // background-color: red;
    // bottom: 0px;
    // marginBottom: '0px',
    // right: '0px',
    // theme.palette.type === "light"
    //   ? theme.palette.grey[200]
    //   : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <footer className={classes.footer}> */}
        {/* <Container maxWidth="sm"> */}
          <div className={classes.footer}>
            <Copyright/>
          </div>
        {/* </Container> */}
      {/* </footer> */}
    </div>
  );
}

