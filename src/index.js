import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import Library from "./Library.js";
import FavoriteColorForm from "./FavoriteColorForm";
import * as serviceWorker from "./serviceWorker";
import propTypes from "prop-types";
///how to compose the component
const books = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "The Sun Also Rise", author: "Ernest Hemingway", pages: 420 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 480 }
];
Library.propTypes = {
  books: propTypes.array
};
render(<Library books={books} />, document.getElementById("root"));
serviceWorker.unregister();
