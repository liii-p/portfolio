import React from "react";
import MorseCode from "../../Images/morse-code.png";
import GoogleBooks from "../../Images/google-books.png";
import Trivia from "../../Images/trivia-question-1a.webp";
import styles from "../Projects/Projects.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const PROFESSIONAL_PROJECTS = [
  {
    title: "Agent Portal Upgrade",
    company: "OpenAgent",
    tags: ["Next.js", "Auth0", "Redis"],
    description:
      "Delivered an upgraded bespoke agent portal in 2 months, improving the UX and introducing Auth0/Redis-backed session tokens for stronger user security, working across a 5-person engineering team.",
  },
  {
    title: "Blog & News Site Consolidation",
    company: "OpenAgent",
    tags: ["Gatsby", "TypeScript", "Strapi CMS"],
    description:
      "Partnered with another developer to merge two separate apps into a single Gatsby/TypeScript project with a bespoke component library, reducing code duplication and integrating with Strapi CMS.",
  },
];

const PERSONAL_PROJECTS = [
  {
    title: "Morse Code Translator",
    image: MorseCode,
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "A morse code translator built using HTML, CSS and JavaScript.",
    link: "https://github.com/liii-p/morse-code",
  },
  {
    title: "Google Books Search",
    image: GoogleBooks,
    tags: ["React", "Google Books API"],
    description:
      "A React app that uses the Google Books API to fetch book data based on the user's search input.",
    link: "https://github.com/liii-p/books-app",
  },
  {
    title: "Trivia App",
    image: Trivia,
    tags: ["React", "TypeScript"],
    description:
      "A trivia app built using React and TypeScript, with data fetched from a trivia API.",
    link: "https://github.com/liii-p/trivia-app",
  },
];

const Projects = () => {
  return (
    <section className={styles.project} id="projects">
      <Container fluid>
        <h2>Projects</h2>

        <h3 className={styles.project__subheading}>Professional Work</h3>
        <Row>
          {PROFESSIONAL_PROJECTS.map((project) => (
            <Col lg={6} key={project.title} className={styles.project__card}>
              <div className={styles.project__professional}>
                <h4>{project.title}</h4>
                <span className={styles.project__company}>
                  {project.company}
                </span>
                <p>{project.description}</p>
                <div className={styles.project__tags}>
                  {project.tags.map((tag) => (
                    <span className={styles.project__tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <h3 className={styles.project__subheading}>Personal Projects</h3>
        <Row>
          {PERSONAL_PROJECTS.map((project) => (
            <Col lg={4} key={project.title} className={styles.project__card}>
              <Image src={project.image} thumbnail />
              <h4>{project.title}</h4>
              <div className={styles.project__tags}>
                {project.tags.map((tag) => (
                  <span className={styles.project__tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p>
                {project.description} See more{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                </a>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
