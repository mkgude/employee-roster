import React from "react";
import "./style.css";
import Employee from "./Employees";
import employee from "../../employees.json";

function Table() {
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Headshot</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>

        <Employee
          headshot={employee[0].headshot}
          name={employee[0].name}
          phone={employee[0].phone}
          email={employee[0].email}
          role={employee[0].role}
        />
      </table>
    </div>
  );
}

export default Table;
