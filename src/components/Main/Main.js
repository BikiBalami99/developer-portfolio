import React, { useState } from "react";

import styles from "./Main.module.css";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

function Main() {
  const [display, setDisplay] = useState(<></>);

  function handleSelect(selectedItem) {
    console.log(selectedItem);
    switch (selectedItem) {
      case "Projects":
        setDisplay(<Projects />);
        break;
      case "About me":
        setDisplay(<AboutMe />);
        break;
      case "Contact me":
        setDisplay(<ContactMe />);
        break;
      default:
        setDisplay(<></>);
        break;
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.folders}>
        <div onClick={() => handleSelect("Projects")}>Projects</div>
        <div onClick={() => handleSelect("About me")}>About me</div>
        <div onClick={() => handleSelect("Contact me")}>Contact me</div>
      </div>
      <div className={styles.window}>{display}</div>
    </div>
  );
}

export default Main;
