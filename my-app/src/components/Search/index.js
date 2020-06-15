import React, { Component } from "react";

class Search extends Component {
  //Setting the component' initial state
  state = {
    search: "",
  };

  handleInputChange = (event) => {
    //Getting the value an d name of the input wich triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
    });
  };
  render() {
    return (
      <form class="form-inline">
        <input
          name="search"
          value={this.state.search}
          onChange={this.handleInputChxange}
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
