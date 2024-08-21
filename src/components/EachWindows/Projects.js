import React from "react";
import styles from "./Projects.module.css";

function Projects({ closeHandler }) {
  return (
    <div className={styles.projects}>
      <div className={styles.topBar}>
        <div className={styles.topBarWindowControlButtons}>
          <button onClick={() => closeHandler()}>X</button>
          <button>O</button>
          <button>W</button>
        </div>
        <span className={styles.topBarTitle}>Projects</span>

        <input
          className={styles.topBarSearch}
          type="text"
          placeholder="Search"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.file}>File-1</div>
        <div className={styles.file}>File-1-code</div>
        <div className={styles.file}>File-2</div>
        <div className={styles.file}>File-3-code</div>
        <div className={styles.file}>File-4</div>
        <div className={styles.file}>File-5-code</div>
      </div>
    </div>
  );
}

export default Projects;
