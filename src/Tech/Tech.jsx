import React from "react";
import styles from "../Tech/Tech.module.scss";
import { BsCodeSlash, BsFillBootstrapFill } from "react-icons/bs";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3Full, DiSass, DiGit } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";

const Tech = () => {
  return (
    <div className={styles.Tech} id="tech">
      <h2>My Tech Stack</h2>
      <p>
        Here are the skills and languages I've learned with Nology! If you're on
        desktop, hover over each icon!
      </p>
      <div className={styles.Tech__stack}>
        <div className={styles.Tech__stack1}>
          <BsCodeSlash size="70px" title="coding" className={styles.enlarge} />
          <AiFillHtml5
            size="70px"
            title="HTML"
            className={styles.enlarge}
          />
          <DiCss3Full
            size="70px"
            title="CSS"
            className={styles.enlarge}
          />
          <DiSass
            size="70px"
            title="SASS/SCSS"
            className={styles.enlarge}
          />
          <SiJavascript
            size="70px"
            title="JavaScript"
            className={styles.enlarge}
          />
        </div>
        <div className={styles.Tech__stack2}>
          <FaJava
            size="70px"
            title="Java"
            className={styles.enlarge}
          />
          <FaReact
            size="70px"
            title="React"
            className={styles.enlarge}
          />
          <DiGit
            size="70px"
            title="Git"
            className={styles.enlarge}
          />
          <AiFillGithub
            size="70px"
            title="GitHub"
            className={styles.enlarge}
          />
          <BsFillBootstrapFill
            size="70px"
            title="Bootstrap"
            className={styles.enlarge}
          />
        </div>
      </div>
    </div>
  );
};

export default Tech;
