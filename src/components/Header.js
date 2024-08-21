import React from "react";
import styles from "./Header.module.css";

function Header() {
  // Getting time and date
  const now = new Date();
  const date = now.toLocaleString("en-US", { month: "short", day: "numeric" });
  const time = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <a className={styles.logo} href="#">
          Biki Balami
        </a>
        <div className={styles.currentItem}>
          <p>Current-Item</p>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.time}>
          <p>{date}</p>
        </div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
}

export default Header;
