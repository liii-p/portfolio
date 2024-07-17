import styles from "../Education/Education.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Education = () => {
  return (
    <section className={styles.Education}>
      <Container>
        <Row>
          <h2>Education & Certifications</h2>
        </Row>
        <Row>
          <Col>
            <h3>In Progress</h3>
            <ul>
              <li>Bch. Computer Science @ University of New England</li>
              <li>Google Data Analytics on Coursera</li>
              <li>Azure Data Fundamentals certification</li>
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
        <Row></Row>
      </Container>
    </section>
  );
};

export default Education;
