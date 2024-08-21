import React, { useState } from "react";

import styles from "./Main.module.css";
import Projects from "./EachWindows/Projects";
import AboutMe from "./EachWindows/AboutMe";
import ContactMe from "./EachWindows/ContactMe";
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
      <div className={styles.sidebar}>
        <Folder title="Projects" selectHandler={handleSelect} />
        <Folder title="About me" selectHandler={handleSelect} />
        <Folder title="Contact me" selectHandler={handleSelect} />
      </div>

      {/* Windows */}
      <div className="window">{onDisplay}</div>
    </div>
  );
}

export default Main;
