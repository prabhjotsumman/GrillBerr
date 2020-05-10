import React, { Component } from 'react';

import Banner from './Banner';
import Grills from '../Grills/Grills';

class Homepage extends Component{
    render(){
        return (
          <>
            <Banner/>
            <Grills/>
          </>
        );
    }
}

export default Homepage;