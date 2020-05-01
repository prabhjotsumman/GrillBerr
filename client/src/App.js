import React from "react";
// import SignInSide from "./Components/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./Components/Homepage";
import SignInSide from "./Components/login";
import SignUpSide from "./Components/register";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={SignInSide} />
      <Route path="/signup" component={SignUpSide} />
    </Router>
  );
}

export default App;
