import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: "" });
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit">Add Band</button>
        </form>
      </div>
    );
  }
}

export default BandInput;
