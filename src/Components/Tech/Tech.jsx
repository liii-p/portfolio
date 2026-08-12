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
        Here are some of the technologies I have learned and used
      </p>
      <div className={styles.Tech__stack}>
        <div className={styles.Tech__stack1}>
          <div>
            <BsCodeSlash size="70px" title="CLI" className={styles.enlarge} />
            <p>CLI</p>
          </div>
          <div>
            <AiFillHtml5
              size="70px"
              color="F16528"
              title="HTML"
              className={styles.enlarge}
            />
            <p>HTML</p>
          </div>
          <div>
            <DiCss3Full
              size="70px"
              color="264DE4"
              title="CSS"
              className={styles.enlarge}
            />
            <p>CSS</p>
          </div>
          <div>
            <DiSass
              size="70px"
              color="CE679A"
              title="SASS/SCSS"
              className={styles.enlarge}
            />
            <p>SASS/SCSS</p>
          </div>
        </div>
        <div className={styles.Tech__stack2}>
          <div>
            <SiJavascript
              size="70px"
              color="CFB02B"
              title="JavaScript"
              className={styles.enlarge}
            />
            <p>Javascript</p>
          </div>
          <div>
            <FaPython
              size="70px"
              color="646464"
              title="Python"
              className={styles.enlarge}
            />
            <p>Python</p>
          </div>
          <div>
            <FaJava
              size="70px"
              color="0D6EB6"
              title="Java"
              className={styles.enlarge}
            />
            <p>Java</p>
          </div>
          <div>
            <FaReact
              size="70px"
              color="61DBFB"
              title="React"
              className={styles.enlarge}
            />
            <p>React</p>
          </div>
        </div>
        <div className={styles.Tech__stack3}>
          <div>
            <DiGit
              size="70px"
              color="F05030"
              title="Git"
              className={styles.enlarge}
            />
            <p>Git</p>
          </div>
          <div>
            <AiFillGithub
              size="70px"
              color="3F2C00"
              title="GitHub"
              className={styles.enlarge}
            />
            <p>GitHub</p>
          </div>
          <div>
            <BsFillBootstrapFill
              size="70px"
              color="8B0BFC"
              title="Bootstrap"
              className={styles.enlarge}
            />
            <p>Bootstrap</p>
          </div>
          <div>
            <SiTypescript
              size="70px"
              color="3178C6"
              title="Typescript"
              className={styles.enlarge}
            />
            <p>Typescript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
