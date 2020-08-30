import React from "react";
import "./style.css";
import Search from "../Search";
import employee from "../../employees.json";

class Table extends React.Component {
  state = {
    employee: employee,
    employeesArray: employee,
    resultOrdered: [],
    resultFiltered: [],
    search: "",
  };
  //sort by alphabetical ascending order
  sortByName = () => {
    let sortedNames = this.state.employee;
    sortedNames.map((employee) => {
      console.log(employee.name);
      return employee.name;
    });
    sortedNames.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
  handleClick = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // setting state to new ordered list
    this.setState({
      resultOrdered: this.sortByName(),
    });
  };

  // filterEmployees = (e) => {
  //   debugger;
  //   // const name = e.target.name;
  //   let allEmployee = this.state.employee;
  //   // console.log(userType);
  //   let newEmployee = allEmployee.filter((employee) =>
  //     employee.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   console.log(newEmployee);
  //   this.setState({
  //     filteredEmployees: newEmployee,
  //   });
  // };
  renderEmployee = () => {
    let filteredEmployee = this.state.employee;
    this.setState({
      employee: filteredEmployee.filter((employee) => {
        return Object.values(employee).includes(this.state.search);
      }),
    });
  };

  onchange = (e) => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <div>
        <Search onchange={this.onchange} search={this.state.search} />
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Headshot</th>
                <th scope="col">
                  <button type="button" onClick={this.handleClick}>
                    Name
                  </button>
                </th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employee.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <img
                      src={employee.headshot}
                      alt={employee.name}
                      className="image"
                    />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
