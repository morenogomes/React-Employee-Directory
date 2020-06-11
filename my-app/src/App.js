import React, {Component} from "react";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeesCard from "./components/EmployeesCard";
import employee from "./employee.json";

class App extends Component{

  state = {
    employee
  };
  //function filters employee by the name
  filterEmployee = firstName => {
    console.log(firstName);
    const employee = this.state.employee.filter(employee => employee.firstName != firstName);
    this.setState({ employee });
  }
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Title>Employees</Title>
        {this.Component}
        {this.state.employee.map(employee => (
          <EmployeesCard
          id={employee.id}
          key={employee.key}
          firstName={employee.firstName}
          lastName={employee.lastName}
          image={employee.image}
          occupation={employee.occupation}
          location={employee.location}
          />
        ))};
      </Wrapper>
    )
  }

};

export default App;
