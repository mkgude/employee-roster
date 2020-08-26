import React from "react";
import "../styles/Search.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function Search() {
  return (
    <div className="search">
      <h2>SEARCH</h2>
      <input
        className="form-control"
        type="text"
        placeholder="search"
        aria-label="Search"
      />
      {/* input bar to search for employee */}
    </div>
  );
}

export default Search;
