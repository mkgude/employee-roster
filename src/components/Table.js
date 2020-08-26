import React from "react";

function Table() {
  return (
    <div>
      {/* listed out employees in a table and return only one employee when searching */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row">
            <td>
              <img
                className="headshot"
                src="https://bloximages.chicago2.vip.townnews.com/mtstandard.com/content/tncms/assets/v3/editorial/0/c3/0c39eaf7-4d14-551e-b600-d1475ee104f2/5eeb53ddccdf0.image.jpg"
                alt="Oprah"
              />
            </td>
            <td>Oprah Winfrey</td>
            <td>1010101010</td>
            <td>oprah@mycompany.com</td>
            <td>President</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
