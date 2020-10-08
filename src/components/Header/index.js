import React from "react";
import "./style.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
function Header() {
  return (
    <header className="header">
      <a
        className="article-link"
        href="http://content.time.com/time/specials/packages/0,28757,2029774,00.html"
      >
        link to article
      </a>
      <h1>TIMES 25 Most Powerful Women of the Past Century</h1>
    </header>
  );
  // {props.children} see ex. 12
}

export default Header;
