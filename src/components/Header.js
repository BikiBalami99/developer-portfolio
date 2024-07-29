import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <a href="#">Biki Balami</a>
        <div id="current-item">
          <p>Current-Item</p>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className="battery">
          <p>battery</p>
        </div>
        <div>
          <p>DD MM YY</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
