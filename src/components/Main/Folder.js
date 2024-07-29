import React from "react";
import styles from "./Folder.module.css";

function Folder({ title, selectHandler }) {
  return (
    <div className={styles.eachFolder}>
      <div
        className={styles.folderIcon}
        onClick={() => selectHandler(title)}
      ></div>
      <p>{title}</p>
    </div>
  );
}
export default Folder;
