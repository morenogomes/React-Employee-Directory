import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Render from "./components/Render"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeesCard from "./components/EmployeesCard";
import employee from "./employee.json";
import Search from "./components/Search";


function App() {
  const [employees, setEmployees] = useState();
  
  return (
    <Wrapper>
      <Title>Employees</Title>
      <Search setEmployees={setEmployees}/>
    </Wrapper>
  )
};

export default App;
