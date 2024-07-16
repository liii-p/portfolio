import React from "react";
import styles from "./Intro.module.scss";
import Headshot from "../Images/lianna-headshot2.JPG"

const Intro = () => {
  return (
    <section className={styles.Intro} id="intro">
      <h1>
        Lianna Pyman <br /> Software Developer
      </h1>
      <h2>About Me!</h2>
      <div className={styles.Intro__flex}>
        <div className={styles.Intro__para}>
      <p>
        Hi! I'm an eternal learner who reads books, watches movies and loves to
        code daily. <br /> But when I'm not learning, I'm usually watching movies or
        doing Muay Thai, hoping to become the next Karate Kid 
        (even though that's a different martial art!). <br />I enjoy building React applications, as well as
        challenging myself to learn new things such as Data Analytics or Azure! <br /> At the moment, I am pursuing my Bachelor of Computer Science with a double
        major in Software Development and Cybersecurity. I'm always on the hunt to learn new things
        and keep up to date! <br /> I always aim to improve my skills and get feedback so I can deliver
        better value every day.</p>
        </div>
        <div className={styles.Intro__headshot}>
          <img src={Headshot} alt="Lianna's headshot"/>
        </div>
      </div>
      <hr />
      <div className={styles.Intro__para}>
        <p>
        What am I currently working on? <br /> - This portfolio! <br /> - University projects involving Python and Java.
        Check out my Python project <a href="https://github.com/liii-p/codetown_burger_co">here</a>. 
        <br /> - A trivia app using TypeScript and React, see it <a href="https://github.com/liii-p/trivia-app">here</a>.<br />
      </p>
      </div>
    </section>
  );
};

export default Intro;
