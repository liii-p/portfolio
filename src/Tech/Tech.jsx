import React from "react";
import styles from "../Tech/Tech.module.scss";
import { BsCodeSlash, BsFillBootstrapFill } from "react-icons/bs";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3Full, DiSass, DiGit } from "react-icons/di";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaReact, FaJava, FaPython } from "react-icons/fa";

const Tech = () => {
  return (
    <section className={styles.Tech} id="tech">
      <hr />
      <h2>My Tech Stack</h2>
      <p>
        Here are the skills and languages I've learned with Nology! 
        <br /> If you're on
        desktop, hover over each icon!
      </p>
      <div className={styles.Tech__stack}>
        <div className={styles.Tech__stack1}>
          <BsCodeSlash size="70px" title="coding" className={styles.enlarge} />
          <AiFillHtml5
            size="70px"
            color="F16528"
            title="HTML"
            className={styles.enlarge}
          />
          <DiCss3Full
            size="70px"
            color="264DE4"
            title="CSS"
            className={styles.enlarge}
          />
          <DiSass
            size="70px"
            color="CE679A"
            title="SASS/SCSS"
            className={styles.enlarge}
          />
          <SiJavascript
            size="70px"
            color="CFB02B"
            title="JavaScript"
            className={styles.enlarge}
          />
        </div>
        <div className={styles.Tech__stack2}>
          <FaJava
            size="70px"
            color="0D6EB6"
            title="Java"
            className={styles.enlarge}
          />
          <FaReact
            size="70px"
            color="61DBFB"
            title="React"
            className={styles.enlarge}
          />
          <DiGit
            size="70px"
            color="F05030"
            title="Git"
            className={styles.enlarge}
          />
          <AiFillGithub
            size="70px"
            color="3F2C00"
            title="GitHub"
            className={styles.enlarge}
          />
          <BsFillBootstrapFill
            size="70px"
            color="8B0BFC"
            title="Bootstrap"
            className={styles.enlarge}
          />
        </div>
        <div>
          <FaPython  
          size="70px"
            color="646464"
            title="Python"
            className={styles.enlarge}/>
          <SiTypescript  
            size="70px"
            color="3178C6"
            title="Typescript"
            className={styles.enlarge}/>
        </div>
      </div>
    </section>
  );
};

export default Tech;
