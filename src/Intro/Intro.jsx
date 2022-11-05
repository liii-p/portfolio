import React from "react";
import styles from "./Intro.module.scss";
import BatmanLogo from "../Images/Batman-Logo.png";

const Intro = () => {
  return (
    <div className={styles.Intro} id="intro">
      <h1>
        Lianna Pyman <br /> Software Developer
      </h1>
      <h2>About Me!</h2>
      <p className={styles.Intro__para}>
        Hi! I'm an avid nerd who reads books, plays tonnes of games and loves to
        code daily. <br />I love learning new things everyday so I can learn new
        skills and improve myself. <br /> But when I'm not learning, I'm usually
        playing games like the Batman Arkham series...or watching The Batman
        (2022) . <br />I love building React applications for fun, as well as
        challenging myself to learn new technologies and languages such as
        Node.js and AWS! <br /> I even like to learn spoken languages like
        Korean and Chinese! <br />
        <hr />
        What am I currently working on? <br /> - This portfolio! <br /> - A
        react project inspired by Marvel's Daredevil (check it out{" "}
        <a href="https://github.com/liii-p/daredevil" target="blank">
          here!
        </a>
        ) <br /> - An Angry Birds(TM) clone using unity game engine <br /> - And
        more!
      </p>
      <img src={BatmanLogo} className={styles.Intro__img} alt="batman logo" />
    </div>
  );
};

export default Intro;
