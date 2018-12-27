import React from "react";
import ReactDOM from "react-dom";
import PrismicWrapper from "./prismic/PrismicWrapper";
import Routes from "./Routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <PrismicWrapper routes={Routes} repositoryName="StaciaPhalen" />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
