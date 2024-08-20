import React from "react";
import styles from "../Intro/Intro.module.scss";
import Headshot from "../../Images/lianna-headshot2.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const Intro = () => {
  return (
    <section className={styles.Intro} id="intro">
      <Container fluid>
        <Row className="justify-content-center" id="title">
          <h1>
            Lianna Pyman <br /> Software Developer
          </h1>
          <h2>About Me</h2>
        </Row>
        <Stack className="justify-content-center">
          <Col>
            <p>
              Hi, I'm Lianna, I recently just wrapped up a little over 1 year of
              experience at PwC as a QA & Test Automation Engineer. I'm now
              looking to pivot to development.
              <br /> I originally decided to go into tech because I've always
              been surrounded by technology and was curious to learn how it
              worked! <br />
              My favourite tech includes Python, Java and React (either
              Javascript or Typescript). <br /> I always enjoy the challenge of
              learning new things and pushing the boundaries of my skillset.
              <br />
              In my free time, you'll find me painting with Bob Ross or reading
              books like Pride and Prejudice.
            </p>
          </Col>
          <Col lg={4}>
            <div className="embed-responsive">
              <img src={Headshot} class="img-fluid" alt="Lianna's headshot" />
            </div>
          </Col>
        </Stack>
      </Container>
      <hr />
    </section>
  );
};

export default Intro;
