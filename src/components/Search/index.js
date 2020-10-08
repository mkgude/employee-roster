import React from "react";
import "./style.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <h2>Look for a leading lady below...</h2>
        <input
          className="form-control"
          type="text"
          onChange={this.props.onchange}
          value={this.props.search}
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}

export default Search;
