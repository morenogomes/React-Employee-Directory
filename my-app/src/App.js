import React, { Component, useState } from "react";
import Navbar from "./components/Navbar"
// import Render from "./components/Render"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeesCard from "./components/EmployeesCard";
import employee from "./employee.json";
import Search from "./components/Search";


// function App() {
//   return (
//     <Wrapper>
//       <Navbar />
//       <Title>Employees</Title>
//       <Render />
//     </Wrapper>
//   );
// };


// class App extends Component{

//   state = {
//     employee,
//   };
//   //function filters employee by the name
//   filterEmployee = nameComplete => {
//     console.log(nameComplete);
//     const employee = this.state.employee.filter(employee => employee.nameComplete != nameComplete);
//     this.setState({ employee });
//   }
//   render() {

function App() {
  const [employee, setEmployee] = useState();
  
    return (
      <Wrapper>
        <Navbar />
        <Title>Employees</Title>
        <Search/>
        {this.Component}
        {this.state.employee.map(employee => (
          <EmployeesCard
          id={employee.id}
          key={employee.key}
          nameComplete={employee.nameComplete}
          image={employee.image}
          occupation={employee.role}
          location={employee.location}
          />
        ))};
      </Wrapper>
    )
};

export default App;
