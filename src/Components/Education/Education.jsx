import styles from "../Education/Education.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Education = () => {
  return (
    <section className={styles.Education} id="education">
      <Container>
        <Row>
          <h2>Education & Certifications</h2>
        </Row>
        <Row>
          <Col>
            <h3>In Progress</h3>
            <ul>
              <li>Bachelor of Computer Science
                <p className={styles.Education__provider}>University of New England - Part Time</p></li>
            </ul>
          </Col>
          <Col>
            <h3>Certified</h3>
            <ul>
              <li>ISTQB Certified Tester: Foundation Level</li>
              <li>Microsoft Certified: Azure Fundamentals</li>
              <li>Nology Tech Accelerator Program</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
