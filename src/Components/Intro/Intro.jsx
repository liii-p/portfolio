import React from "react";
import styles from "../Intro/Intro.module.scss";
import Headshot from "../../Images/lianna-headshot.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intro = () => {
  return (
    <section className={styles.Intro} id="intro">
      <Container fluid>
        <Row className="justify-content-center" id="title">
          <h1>
            Lianna Pyman <br /> Software Engineer — Frontend &amp; Full-Stack
          </h1>
          <h2>About Me</h2>
        </Row>
        <Row>
          <Col>
            <p>
              Hi, I'm Lianna. I'm a frontend-focused Software Engineer with
              2+ years of experience building content-driven web apps,
              primarily in React (Next.js, Gatsby) and TypeScript, with
              hands-on experience in Vue.js too.
            </p>
            <p>
              Before development, I spent over a year as a QA & Test
              Automation Engineer, logging 500+ defects on a Microsoft
              CRM/ERP project at PwC. That background means I bring a strong
              quality and reliability mindset to everything I build, not
              just the features that look right in a demo.
            </p>
            <p>
              I enjoy integrating headless CMS platforms, optimising for SEO
              and Core Web Vitals, and working closely with designers and
              content teams to turn Figma into production-ready code. I'm
              also Azure Fundamentals certified and use AI tools like GitHub
              Copilot and Claude Code daily to move faster.
            </p>
            <p>
              Outside of work, you'll find me painting with Bob Ross,
              practising piano and/or violin, or in the gym.
            </p>
          </Col>
          <Col md={5}>
            <img
              src={Headshot}
              className="img-fluid"
              alt="Lianna's headshot"
              height={300}
              width={300}
            />
          </Col>
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default Intro;
