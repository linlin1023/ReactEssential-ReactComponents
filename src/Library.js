import React, { Component } from "react";

const books = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "The Sun Also Rise", author: "Ernest Hemingway", pages: 420 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 480 }
];
const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>pages: {pages} pages</p>
    </section>
  );
};
const Hiring = () => (
  <div>
    <p>The library is hiring</p>
  </div>
);

class Library extends Component {
  state = { open: false };

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    let { books } = this.props;
    return (
      <div>
        {books.map(book => (
          <Book title={book.title} author={book.author} pages={book.pages} />
        ))}
        <button onClick={this.toggleOpenClosed}>open/close</button>
        <div>The library is {this.state.open ? "open" : "closed"}</div>
      </div>
    );
  }
}

export default Library;
