import React, { useState } from "react";

import styles from "./Main.module.css";
import Projects from "./Windows/Projects";
import AboutMe from "./Windows/AboutMe";
import ContactMe from "./Windows/ContactMe";
import Folder from "./Folder";

function Main() {
  const [onDisplay, setOnDisplay] = useState(<></>);

  // Following function handles which window to show.
  function handleSelect(selectedItem) {
    switch (selectedItem) {
      case "Projects":
        setOnDisplay(<Projects closeHandler={handleClose} />);
        break;
      case "About me":
        setOnDisplay(<AboutMe closeHandler={handleClose} />);
        break;
      case "Contact me":
        setOnDisplay(<ContactMe closeHandler={handleClose} />);
        break;
      default:
        setOnDisplay(<></>);
        break;
    }
  }

  function handleClose() {
    setOnDisplay(<></>);
  }

  return (
    <div className={styles.main}>
      <div className={styles.folders}>
        <Folder title="Projects" selectHandler={handleSelect} />
        <Folder title="About me" selectHandler={handleSelect} />
        <Folder title="Contact me" selectHandler={handleSelect} />
      </div>

      {/* Windows */}
      {onDisplay}
    </div>
  );
}

export default Main;
