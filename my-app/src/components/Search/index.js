import React, { Component } from "react";

class Search extends Component {
  //Setting the component' initial state
  state = {
    search: "",
  };

  handleInputChange = (event) => {
    //Getting the value and name of the input wich triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
  };

  render() {
    return (
      <form class="form-inline">
        <input
          name="search"
          value={this.props.search}
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

// import React from "react";

// function Search(props) {
//   return (
//     <form className="search">
//       <div className="form-group">
//         <label htmlFor="breed">Breed Name:</label>
//         <input
//           value={props.search}
//           onChange={props.handleInputChange}
//           name="breed"
//           list="breeds"
//           type="text"
//           className="form-control"
//           placeholder="Type in a dog breed to begin"
//           id="breed"
//         />
//         <datalist id="employee">
//           {props.employee.map(employee => (
//             <option value={employee} key={employee} />
//           ))}
//         </datalist>
//         <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Search;