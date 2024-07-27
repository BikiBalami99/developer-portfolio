import React from "react";
import "./global.css";

function App() {
  return (
    <div className="app">
      <main>
        <section id="hero">
          <h1>Welcome to My Portfolio</h1>
          <p>Creative Developer & Designer</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>About content goes here.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>Projects content goes here.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Contact content goes here.</p>
        </section>
      </main>
      <aside className="navBar">
        <nav>
          <ul>
            <li className="active">Home</li>
            <li>Projects</li>
            <li>About me</li>
            <li>Contact</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default App;
