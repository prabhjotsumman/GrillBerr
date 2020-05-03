import React, { Component } from "react";
import Navbar from '../Navbar/Navbar';

class PDP extends Component {
  render() {
    console.log("PDP");
    return (
      <div>
          <Navbar/>
        <h3>Product Description Page : PDP Page</h3>
      </div>
    );
  }
}

export default PDP;
