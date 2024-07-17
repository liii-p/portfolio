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
        <br /> If you're on desktop, hover over each icon!
      </p>
      <div className={styles.Tech__stack}>
        <div className={styles.Tech__stack1}>
          <container>
            <BsCodeSlash size="70px" title="CLI" className={styles.enlarge} />
            <p>CLI</p>
          </container>
          <container>
            <AiFillHtml5
              size="70px"
              color="F16528"
              title="HTML"
              className={styles.enlarge}
            />
            <p>HTML</p>
          </container>
          {/* <container>
            <DiCss3Full
              size="70px"
              color="264DE4"
              title="CSS"
              className={styles.enlarge}
            />
            <p>CSS</p>
          </container> */}
          <container>
            <DiSass
              size="70px"
              color="CE679A"
              title="SASS/SCSS"
              className={styles.enlarge}
            />
            <p>SASS/SCSS</p>
          </container>
          <container>
            <SiJavascript
              size="70px"
              color="CFB02B"
              title="JavaScript"
              className={styles.enlarge}
            />
            <p>Javascript</p>
          </container>
          <container>
            <FaPython
              size="70px"
              color="646464"
              title="Python"
              className={styles.enlarge}
            />
            <p>Python</p>
          </container>
        </div>
        <div className={styles.Tech__stack2}>
          <container>
            <FaJava
              size="70px"
              color="0D6EB6"
              title="Java"
              className={styles.enlarge}
            />
            <p>Java</p>
          </container>
          <container>
            <FaReact
              size="70px"
              color="61DBFB"
              title="React"
              className={styles.enlarge}
            />
            <p>React</p>
          </container>
          <container>
            <DiGit
              size="70px"
              color="F05030"
              title="Git"
              className={styles.enlarge}
            />
            <p>Git</p>
          </container>
          <container>
            <AiFillGithub
              size="70px"
              color="3F2C00"
              title="GitHub"
              className={styles.enlarge}
            />
            <p>GitHub</p>
          </container>
          <container>
            <BsFillBootstrapFill
              size="70px"
              color="8B0BFC"
              title="Bootstrap"
              className={styles.enlarge}
            />
            <p>Bootstrap</p>
          </container>

          <container>
            <SiTypescript
              size="70px"
              color="3178C6"
              title="Typescript"
              className={styles.enlarge}
            />
            <p>Typescript</p>
          </container>
        </div>
      </div>
    </section>
  );
};

export default Tech;
