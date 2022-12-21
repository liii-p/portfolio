import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      {/* <hr /> */}
      <h2>Contact</h2>
      <p>Let's connect!</p>
      <div className={styles.contact__icons}>
      <a href="https://www.linkedin.com/in/lianna-pyman/" target="blank">
        <AiFillLinkedin
          size="75px"
          color="2662A9"
          className={styles.contact__linkedin}
        />
      </a>
      <a href="mailto:liannapyman@gmail.com" target="blank">
        <SiGmail size="70px" color="F47C8A" className={styles.contact__gmail} />
      </a>
      </div>
    </div>
  );
};

export default Contact;
