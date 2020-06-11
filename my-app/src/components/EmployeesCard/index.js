import React from "react";
import "./style.css";

function EmployeesCard(props) {
  console.log(props);
  return (
    <div className="card">{props.friends.map(item => (
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content" key={item.id}>
        <ul>
          <li>
            <strong>First Name:</strong> {item.firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {item.lastName}
          </li>
          <li>
            <strong>Occupation:</strong> {item.occupation}
          </li>
          <li>
            <strong>Location:</strong> {item.location}
          </li>
        </ul>
      </div>
    ))}
    </div>
  );
}

export default EmployeesCard;
