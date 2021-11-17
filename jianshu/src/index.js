import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IconFont } from "./static/iconfont/iconfont";
import { GlobalStyle } from "./style";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconFont />
    <App />
  </Fragment>,
  document.getElementById("root")
);
