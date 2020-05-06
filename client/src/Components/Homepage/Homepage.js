import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

// import Grid from '@material-ui/core/Grid'
// import Card from '../MaterialUI/Card/Card';
import Banner from './Banner';
import Footer from './Footer';
import Grills from '../Grills/Grills';

class Homepage extends Component{
    render(){
        return (
          <>
            <Navbar />
            <Banner/>
            <Grills/>
            <Footer/>
          </>
        );
    }
}

export default Homepage;