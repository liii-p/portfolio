import React from "react";
import styles from "../Intro/Intro.module.scss";
import Headshot from "../../Images/lianna-headshot2.JPG";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intro = () => {
  return (
    <section className={styles.Intro} id="intro">
      {/* 
      <div className={styles.Intro__flex}>
        <div className={styles.Intro__para}>
          <p>
            Hi, I'm Lianna, I'm currently studying a Bachelor of Computer
            Science and recently just wrapped up 1 year of experience at PwC as
            a QA & Test Automation Engineer. I'm now pivoting to development.
            <br /> I originally decided to go into tech because I've always been
            surrounded by technology and wanted to know how it all worked!{" "}
            <br />
            My favourite tech includes Python, Java and React (either Javascript
            or Typescript), I am always challenging myself to learn new things
            which is why I'm working towards a few certifications, which you can
            find out about below. <br /> I always enjoy the challenge of
            learning new things and pushing the boundaries of my skillset.{" "}
            <br />
            But when I'm not learning, I'm usually watching movies or doing Muay
            Thai, hoping to become the next Karate Kid (even though that's a
            different martial art!).
          </p>
        </div>
        <div className={styles.Intro__headshot}>
          <img src={Headshot} alt="Lianna's headshot" />
        </div>
      </div> */}
      <Container>
        <Row>
          <h1>
            Lianna Pyman <br /> Software Developer
          </h1>
          <h2>About Me</h2>
        </Row>
        <Row>
          <Col>
            <p>
              Hi, I'm Lianna, I'm currently studying a Bachelor of Computer
              Science and recently just wrapped up 1 year of experience at PwC
              as a QA & Test Automation Engineer. I'm now pivoting to
              development.
              <br /> I originally decided to go into tech because I've always
              been surrounded by technology and wanted to know how it all
              worked! <br />
              My favourite tech includes Python, Java and React (either
              Javascript or Typescript). <br /> I always enjoy the challenge of
              learning new things and pushing the boundaries of my skillset.{" "}
              <br />
              But when I'm not learning, I'm usually watching movies or doing
              Muay Thai, hoping to become the next Karate Kid (even though
              that's a different martial art!).
            </p>
          </Col>
          <Col>
            <Image src={Headshot} rounded />
          </Col>
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default Intro;
