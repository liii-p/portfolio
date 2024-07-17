import styles from "../Education/Education.scss";

const Education = () => {
  return (
    <section className={styles.Education}>
      <h2>Education & Certifications</h2>
      <div className={styles.Education__certs}>
        <h3>In Progress</h3>
        <div className={styles.Education__inProgress}>
          <ul>
            <li>Bch. Computer Science @ University of New England</li>
            <li>Google Data Analytics on Coursera</li>
            <li>Azure Data Fundamentals certification</li>
          </ul>
        </div>
        <div>
          <h3>Certified</h3>
          <ul>
            <li>ISTQB Certified Tester: Foundation Level</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>Nology Tech Accelerator Program</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
