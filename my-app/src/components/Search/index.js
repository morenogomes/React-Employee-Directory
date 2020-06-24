import React,{ useState } from "react";
import EmployeesCard from "../EmployeesCard";

//get all the employees from the json file.
const employees = require('../../employee.json');

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
    const filtered_employees = employees.filter((employee) => employee.nameComplete.includes(search) );
  
    //call setEmployees with the filtered list of employees
    setEmployees(filtered_employees)
  };

    return (
      <form class="form-inline" onSubmit={handleFormSubmit}>
        <input
          name="search"
          // value={''}
          onChange={handleInputChange}
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