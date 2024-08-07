import React from "react";
import MorseCode from "../../Images/morse-code.png";
import GoogleBooks from "../../Images/google-books.png";
import Trivia from "../../Images/trivia-question-1a.png";
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
              A morse code translator built using HTML, CSS and JavaScript. See
              more{" "}
              <a href="https://github.com/liii-p/morse-code" target="blank">
                here.
              </a>
            </p>
          </Col>
          <Col lg>
            <Image src={GoogleBooks} thumbnail />
            <p>
              A React app that uses the Google books API to fetch book data
              based on the user's search input. See more{" "}
              <a href="https://github.com/liii-p/books-app" target="blank">
                here.
              </a>
            </p>
          </Col>
          <Col lg={4}>
            <Image src={Trivia} thumbnail />
            <p>
              A trivia app built using React and Typescript. Data fetched from a
              trivia API. See more{" "}
              <a href="https://github.com/liii-p/trivia-app" target="blank">
                here.
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
