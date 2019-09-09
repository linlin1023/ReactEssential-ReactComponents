import React, { Component } from "react";

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
  static defaultProps = {
    books: [{ title: "xxxx", author: "asdf", pages: 1000 }]
  };

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
