import React, { Component } from "react";
import PropTypes from 'prop-types';

export class AddTodos extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: "10", padding: "5px" }}
        ></input>
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        ></input>
      </form>
    );
  }
}

// PropTypes
AddTodos.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodos;
