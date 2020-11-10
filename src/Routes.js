import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login/Login";
import Main from "./Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
