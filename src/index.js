import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
///how to compose the component

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <author>by: {author}</author>
      <pages>pages: {pages} pages</pages>
    </section>
  );
};

const Library = () => {
  return (
    <div>
      <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={200} />
    </div>
  );
};
render(<Library />, document.getElementById("root"));

serviceWorker.unregister();
