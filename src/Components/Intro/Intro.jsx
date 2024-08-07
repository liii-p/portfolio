import React from "react";
import styles from "../Intro/Intro.module.scss";
import Headshot from "../../Images/lianna-headshot2.JPG";
//import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intro = () => {
  return (
    <section className={styles.Intro} id="intro">
      <Container className="mt-5" fluid="md">
        <Row className="justify-content-center" id="title">
          <h1>
            Lianna Pyman <br /> Software Developer
          </h1>
          <h2>About Me</h2>
        </Row>
        <Row className="justify-content-center">
          <Col xs={18} sm={10} md={6} lg={4}>
            <p>
              Hi, I'm Lianna, I'm currently studying a Bachelor of Computer
              Science and recently just wrapped up a little over 1 year of
              experience at PwC as a QA & Test Automation Engineer. I'm now
              pivoting to development.
              <br /> I originally decided to go into tech because I've always
              been surrounded by technology and was insanely curious to learn
              how it worked! <br />
              My favourite tech includes Python, Java and React (either
              Javascript or Typescript). <br /> I always enjoy the challenge of
              learning new things and pushing the boundaries of my skillset.
              <br />
              But when I'm not learning, I'm usually watching movies or doing
              Muay Thai, hoping to become the next Karate Kid (even though
              that's a different martial art!).
            </p>
          </Col>
          <Col xs={18} sm={10} md={6} lg={4}>
            <div className="embed-responsive embed-responsive-16by9">
              {/* <Image src={Headshot} rounded /> */}
              <img src={Headshot} class="img-fluid" alt="Lianna's headshot" />
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default Intro;
