import React, { Component } from "react";

class FavoriteColorForm extends Component {
  state = { value: "" };
  newColor = e => this.setState({ value: e.target.value });
  submit = e => {
    console.log(`New color : ${this.state.value}`);
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Favorite Color:
          <input type="color" onChange={this.newColor}></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default FavoriteColorForm;
