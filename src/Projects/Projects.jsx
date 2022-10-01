import React from "react";
import MorseCode from "../Images/morse-code.png";
import GoogleBooks from "../Images/google-books.png";
import Calculator from "../Images/application.png";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.project} id="#projects">
      <h2>Projects</h2>
      <div className={styles.project__morse}>
        <img
          src={MorseCode}
          alt="Morse Code translator application made with HTML and SCSS"
        />
      </div>
      <div className={styles.project__books}>
        <img src={GoogleBooks} alt="React application using Google Books API" />
      </div>
      <div className={styles.project__calc}>
        <img
          src={Calculator}
          alt="A simple calculator application made with HTML and SCSS"
        />
      </div>
    </div>
  );
};

export default Projects;
