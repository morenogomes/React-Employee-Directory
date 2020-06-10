import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeesCard from "./components/EmployeesCard";
import friends from "./friends.json";
import employee from "./employee.json";

function App() {
  return (
    <Wrapper>
      <Title>Employees</Title>
      <EmployeesCard
        firstName={employee[0].firstName}
        lastName={employee[0].lastName}
        image={employee[0].image}
        occupation={employee[0].occupation}
        location={employee[0].location}
      />
     
      
     
    </Wrapper>
  );
}

export default App;
