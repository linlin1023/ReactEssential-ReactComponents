import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import SkiDayCounter from "./SkiDayCounter";
import * as serviceWorker from "./serviceWorker";

const skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};
const lakeList = [
  { id: 1, name: "lake A" },
  { id: 2, name: "lake B" },
  { id: 3, name: "lake C" }
];
render(<SkiDayCounter skiData={skiData} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
