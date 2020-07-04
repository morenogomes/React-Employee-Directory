import React,{ useState } from "react";
// import EmployeesCard from "../EmployeesCard";

//get all the employees from the json file.
const employees = require('../../employee.json');
let employeesResults = null;

function Search({setEmployees}) {
  //Setting the component' initial state
  const [search, setSearch] = useState('Search');
  const handleInputChange = event => {
    //Getting the value and name of the input wich triggered the change
    event.preventDefault();

    // Updating the input's state
    setSearch(event.target.value);

 
  };
  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    //filter those employees based on the search value
    const filtered_employees = employees.filter((employee) => employee.nameComplete.includes(search));
    console.log(filtered_employees);
    //call setEmployees with the filtered list of employees
    employeesResults = setEmployees(filtered_employees)

  };

    return (
      <form className="form-inline" onSubmit={handleFormSubmit}>
        <input
          name="search"
          // value={''}
          onChange={handleInputChange}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        {/* How can I display here the variable employeesResults?  */}
      </form>
    );
}

export default Search;
