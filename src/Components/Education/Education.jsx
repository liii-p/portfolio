import styles from "../Education/Education.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SiMicrosoftazure } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const Education = () => {
  return (
    <section className={styles.Education}>
      <Container>
        <Row>
          <h2>Education & Certifications</h2>
        </Row>
        <Row>
          <div id="icons">
            <Col>
              <SiMicrosoftazure size="70px" color="0080FF" title="Azure" />
              <FcGoogle size="70px" title="Google" />
            </Col>
          </div>
        </Row>
        <Row>
          <Col>
            <h3>In Progress</h3>
            <ul>
              <li>Google Data Analytics on Coursera</li>
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
