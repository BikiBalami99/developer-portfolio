import React from "react";
import styles from "./Window.module.css";

function Window({ onDisplay }) {
  return (
    <div className={styles.window}>
      <p>{onDisplay}</p>
    </div>
  );
}

export default Window;
