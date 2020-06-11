import React from "react";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeesCard from "./components/EmployeesCard";
import employee from "./employee.json";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Title>Employees</Title>
      <EmployeesCard
        firstName={employee[0].firstName}
        lastName={employee[0].lastName}
        image={employee[0].image}
        occupation={employee[0].occupation}
        location={employee[0].location}
      />
      <EmployeesCard
        firstName={employee[1].firstName}
        lastName={employee[1].lastName}
        image={employee[1].image}
        occupation={employee[1].occupation}
        location={employee[1].location}
      />
      <EmployeesCard
        firstName={employee[3].firstName}
        lastName={employee[3].lastName}
        image={employee[3].image}
        occupation={employee[3].occupation}
        location={employee[3].location}
      />
     
      
     
    </Wrapper>
  );
}

export default App;
