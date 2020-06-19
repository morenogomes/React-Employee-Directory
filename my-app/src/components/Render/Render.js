import React, {Component} from "react";
import EmployeesCard from "./components/EmployeesCard";
import employee from "./employee.json";

class Render extends Component {
    state = {
        employee
    }
    // function filter employee by the name
    filterEmployee = firstName => {
    console.log(firstName);
    const employee = this.state.employee.filter(employee => employee.firstName != firstName);
    this.setState({ employee });
  }
  render() {
      return (
        {this.Component}
        
      )
  }
}

  export default Render;