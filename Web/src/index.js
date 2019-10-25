import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes";
import "./styles/global.css";

ReactDOM.render(
  <React.Fragment>
    <Routes />
  </React.Fragment>,
  document.getElementById("root")
);
