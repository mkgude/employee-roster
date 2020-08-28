import React from "react";
import "./style.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function Search() {
  return (
    <div className="search">
      <h2>Look for an employee below...</h2>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
}

export default Search;
