import React from "react";
import MorseCode from "../../Images/morse-code.png";
import GoogleBooks from "../../Images/google-books.png";
import Calculator from "../../Images/application.png";
import styles from "../Projects/Projects.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Projects = () => {
  return (
    <section className={styles.project} id="projects">
      <Container fluid>
        <h2>Projects</h2>
        <Row>
          <Col>
            <Image src={MorseCode} thumbnail />
            <p>
              Check out the github{" "}
              <a href="https://github.com/liii-p/morse-code" target="blank">
                here
              </a>
            </p>
          </Col>
          <Col lg>
            <Image src={GoogleBooks} thumbnail />
            <p>
              Check out the github{" "}
              <a href="https://github.com/liii-p/books-app" target="blank">
                here
              </a>
            </p>
          </Col>
          <Col lg={4}>
            <Image src={Calculator} thumbnail />
            <p>
              Check out the github{" "}
              <a href="https://github.com/liii-p/JS-calculator" target="blank">
                here
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
