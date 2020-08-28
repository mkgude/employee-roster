import React from "react";
import "./style.css";

function Employee(props) {
  return (
    <tbody>
      <tr>
        <td>
          <img src={props.image} alt={props.name} className="image" />
        </td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.role}</td>
      </tr>
    </tbody>
  );
}

export default Employee;
