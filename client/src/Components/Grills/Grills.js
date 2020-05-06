import React from "react";
// import { Link } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";

import { Grid, makeStyles } from "@material-ui/core";
import GrillCard from "./GrillCard";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { CircularProgress, Typography } from "@material-ui/core";

const getGrillQuery = gql`
  {
    grills {
      name
      description
      price
      id
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px",
  },
}));

export default function Grills() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(getGrillQuery);
  //   const {  data } = useQuery(getGrillQuery);
  console.log("DATA: ", data);

  let grills = {};

  if (data) {
    grills = data.grills.map((grill, index) => {
      return (
        <Grid key={grill.id} item xs={6} sm={4} md={3}>
          <GrillCard grill={grill}></GrillCard>
        </Grid>
      );
    });
  }
  //   let grillContainer = [];
  //   while (grills.length) {
  //     grillContainer.push(grills.splice(0, 3));
  //   }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
        spacing={3}
      >
        {loading ? <CircularProgress /> : grills}
        {error && <Typography variant="body1">Error Loading Data..</Typography>}
      </Grid>
    </div>
  );
}
