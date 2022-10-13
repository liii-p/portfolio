import React from "react";
import MorseCode from "../Images/morse-code.png";
import GoogleBooks from "../Images/google-books.png";
import Calculator from "../Images/application.png";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.project} id="projects">
      <h2>Projects</h2>
      <div className={styles.project__morse}>
        <img
          src={MorseCode}
          alt="Morse Code translator application made with HTML and SCSS"
        />
        <p>
          Check out the github{" "}
          <a href="https://github.com/liii-p/morse-code" target="blank">
            here
          </a>
        </p>
      </div>
      <div className={styles.project__books}>
        <img src={GoogleBooks} alt="React application using Google Books API" />
        <p>
          Check out the github{" "}
          <a href="https://github.com/liii-p/books-app" target="blank">
            here
          </a>
        </p>
      </div>
      <div className={styles.project__calc}>
        <img
          src={Calculator}
          alt="A simple calculator application made with HTML and SCSS"
        />
        <p>
          Check out the github{" "}
          <a href="https://github.com/liii-p/JS-calculator" target="blank">
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
