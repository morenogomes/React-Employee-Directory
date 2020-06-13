import React, { Component } from "react";

class Search extends Component {
    //Setting the component' initial state
    state = {
        firstName: "",
        lastName: ""
    };

    handleInputChange = event => {
        //Getting the value an d name of the input wich triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this. setState({ 
            [name]: value
        });
    };
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
          firstName: "",
          lastName: ""
        });
      };
    
}

export default Search;

