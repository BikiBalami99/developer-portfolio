import React from "react";
import "./global.css";
import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
