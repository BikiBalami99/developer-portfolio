import React, { useState } from "react";

import styles from "./Main.module.css";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Folder from "./Folder";
import Window from "./Window";

function Main() {
  const [onDisplay, setOnDisplay] = useState(<></>);

  function handleSelect(selectedItem) {
    switch (selectedItem) {
      case "Projects":
        setOnDisplay(<Projects />);
        break;
      case "About me":
        setOnDisplay(<AboutMe />);
        break;
      case "Contact me":
        setOnDisplay(<ContactMe />);
        break;
      default:
        setOnDisplay(<></>);
        break;
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.folders}>
        <Folder title="Projects" selectHandler={handleSelect} />
        <Folder title="About me" selectHandler={handleSelect} />
        <Folder title="Contact me" selectHandler={handleSelect} />
      </div>

      {/* Windows */}
      <Window onDisplay={onDisplay} />
    </div>
  );
}

export default Main;
