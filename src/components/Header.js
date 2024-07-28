import React from "react";

function Header() {
  return (
    <div id="header">
      <a href="#">Logo</a>
      <div id="current-item">
        <p>Current Item</p>
      </div>
      <div className="battery">
        <p>battery</p>
      </div>
    </div>
  );
}

export default Header;
