import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
///how to compose the component

const Library = () => {
  return <div>Welcome to library</div>;
};
render(
  <div>
    <Library /> <Library />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
