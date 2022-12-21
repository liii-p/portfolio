import React from "react";
import styles from "./Intro.module.scss";
const Intro = () => {
  return (
    <div className={styles.Intro} id="intro">
      <section className={styles.Intro__text}>
      <div className={styles.Intro__titles}>
      <h1>
        Lianna Pyman <br /> Software Developer
      </h1>
      <h2>About Me!</h2>
      </div>
      <p className={styles.Intro__para}>
        Hi! I'm an avid nerd who reads books, plays tonnes of games and loves to
        code daily. <br /> When I have some free time, I like to go the gym or get out for a bike ride! <br />I love building React applications for fun, as well as
        challenging myself to learn <br /> new technologies and languages such as
        C# with Unity, Java and JSP applications.<br /> I even like to learn spoken languages like
        Korean and Chinese! <br />
      </p>
      </section>
    </div>
  );
};

export default Intro;
