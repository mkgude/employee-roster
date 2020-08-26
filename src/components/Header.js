import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
  return (
    <header className="header">
      <h1>Employee Directory</h1>
    </header>
  );
}

export default Header;
