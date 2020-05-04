import React, { Component } from "react";

const styles = {
  container: {
    border: "1px solid black",
    padding: "10px",
  },
};

class Orders extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
      console.log("ORders PAGE");
    return (
      <>
        <div style={styles.container}>
          <h3>User Orders Page</h3>
        </div>
      </>
    );
  }
}

export default Orders;
