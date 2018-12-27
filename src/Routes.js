import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrismicRoute from "./prismic/PrismicRoute";
import React from "react";
import Nav from "./Nav";
import Work from "./Work";
import About from "./About";

const Routes = props => {
  return (
    <Router>
      <div>
        <PrismicRoute
          path="/"
          component={Nav}
          routerProps={props}
          componentProps={{ uid: "nav" }}
        />
        <Switch>
          <PrismicRoute exact path="/" component={Work} routerProps={props} />
          <PrismicRoute
            exact
            path="/about"
            component={About}
            routerProps={props}
            componentProps={{ uid: "about" }}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
