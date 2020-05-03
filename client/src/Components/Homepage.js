import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

import Grid from '@material-ui/core/Grid'
import Card from './MaterialUI/Card/Card';

// import Footer from './Footer';


class Homepage extends Component{
    render(){
        return (
          <>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>
              {" "}
              Grillber - Book Your BBQ now!
            </h1>
            <Grid
              container
              //   spacing={1}
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item sm={3}>
                <Card />
              </Grid>
              <Grid item sm={3}>
                <Card />
              </Grid>
              <Grid item sm={3}>
                <Card />
              </Grid>
            </Grid>
            <Grid
              container
              //   spacing={1}
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item sm={3}>
                <Card />
              </Grid>
              <Grid item sm={3}>
                <Card />
              </Grid>
              <Grid item sm={3}>
                <Card />
              </Grid>
            </Grid>
            {/* <Footer/> */}
          </>
        );
    }
}

export default Homepage;