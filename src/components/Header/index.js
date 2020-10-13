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
        article link
      </a>
      <img
        className="time-logo"
        src="https://www.logolynx.com/images/logolynx/f1/f179e5b96bc450250af307f80c5af297.png"
      />
      <h1>25 Most Powerful Women of the Past Century</h1>
    </header>
  );
  // {props.children} see ex. 12
}

export default Header;
