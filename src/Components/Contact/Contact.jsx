import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styles from "../Contact/Contact.module.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e3cfb7f3-cc04-4dec-8d21-0c96fe65b959");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <Container fluid>
        <hr />
        <h2>Contact</h2>
        <a href="https://www.linkedin.com/in/lianna-pyman/" target="blank">
          <AiFillLinkedin
            size="75px"
            color="2662A9"
            className={styles.contact__linkedin}
          />
        </a>
        <a href="mailto:liannapyman@gmail.com" target="blank">
          <SiGmail
            size="70px"
            color="F47C8A"
            className={styles.contact__gmail}
          />
        </a>
        <div id="form">
          <p>
            Want to quickly send me an email? Just use the message box below.
          </p>
          <Form onSubmit={onSubmit}>
            <input
              type="hidden"
              name="subject"
              value="New Enquiry from Portfolio"
            />
            <input type="checkbox" name="botcheck" id={styles.botcheck} />
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Firstname Lastname"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="email@example.com"
                  type="email"
                  name="email"
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message here..."
                name="message"
                required
              />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </Form>
          <span>{result}</span>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
