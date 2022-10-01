import React from "react";
import styles from "../Tech/Tech.module.scss";
import { BsCodeSlash, BsFillBootstrapFill } from "react-icons/bs";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3Full, DiSass, DiGit } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";

const Tech = () => {
  return (
    <div className={styles.Tech} id="#tech">
      <h2>My Tech Stack</h2>
      <p>Here are the skills and languages I've learned with Nology!</p>
      <div className={styles.Tech__stack}>
        <div className={styles.Tech__stack1}>
          <BsCodeSlash size="70px" />
          <AiFillHtml5 size="70px" color="F16528" />
          <DiCss3Full size="70px" color="264DE4" />
          <DiSass size="70px" color="CE679A" />
          <SiJavascript size="70px" color="CFB02B" />
        </div>
        <div className={styles.Tech__stack2}>
          <FaJava size="70px" color="0D6EB6" />
          <FaReact size="70px" color="61DBFB" />
          <DiGit size="70px" color="F05030" />
          <AiFillGithub size="70px" color="3F2C00" />
          <BsFillBootstrapFill size="70px" color="8B0BFC" />
        </div>
      </div>
      {/* <p>
        Code <br /> HTML <br /> CSS <br /> SASS <br /> JavaScript <br /> React{" "}
        <br /> Java <br /> Git <br /> Github <br /> Bootstrap
      </p> */}
    </div>
  );
};

export default Tech;
