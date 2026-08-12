import React from "react";
import styles from "../Experience/Experience.module.scss";
import Container from "react-bootstrap/Container";

const EXPERIENCE = [
  {
    role: "Junior Software Engineer",
    company: "OpenAgent",
    location: "Remote",
    period: "October 2024 – Present",
    points: [
      "Delivered an upgraded bespoke agent portal in 2 months using Next.js, with Auth0/Redis session tokens to improve user security, collaborating across a 5-person engineering team.",
      "Partnered with another developer to consolidate two separate blog/news apps into a single Gatsby/TypeScript project with a bespoke component library, integrated with Strapi CMS.",
      "Turned Figma designs into scalable, production-quality code, working closely with designer and content stakeholders.",
      "Contributed fixes to legacy Vue.js projects and mentored new developers as an onboarding buddy.",
    ],
  },
  {
    role: "Associate Software Engineer (Contractor)",
    company: "Nology — placed at PwC Australia",
    location: "Adelaide, Australia",
    period: "May 2023 – September 2024",
    points: [
      "Worked as a QA & Test Automation Engineer on a Microsoft CRM & ERP application integrated with external consumer/member portals.",
      "Logged and tracked 500+ defects using Azure DevOps, directly improving product quality ahead of go-live.",
      "Proposed UX improvements that were adopted into the final product.",
      "Learned JMeter within four weeks to build performance test scripts validating load and response-time requirements.",
    ],
  },
  {
    role: "Trainee Software Developer",
    company: "Nology — Tech Accelerator Program",
    location: "Adelaide, Australia",
    period: "June 2022 – May 2023",
    points: [
      "Completed an intensive software development accelerator (500+ hours) covering full-stack fundamentals, agile collaboration and structured problem-solving.",
      "Delivered several frontend and backend projects, building a foundation in JavaScript, TypeScript and React.",
    ],
  },
  {
    role: "Volunteer Frontend Developer",
    company: "8Billionminds",
    location: "Remote",
    period: "December 2022 – June 2023",
    points: [
      "Contributed to a nonprofit ed-tech platform (JSP/Java), diagnosing and fixing bugs and testing changes locally before deployment.",
      "Proposed ideas to improve user engagement.",
    ],
  },
];

const Experience = () => {
  return (
    <section className={styles.Experience} id="experience">
      <hr />
      <Container fluid>
        <h2>Experience</h2>
        <div className={styles.Experience__timeline}>
          {EXPERIENCE.map((job) => (
            <div
              className={styles.Experience__item}
              key={`${job.company}-${job.role}`}
            >
              <div className={styles.Experience__header}>
                <h3>{job.role}</h3>
                <span className={styles.Experience__period}>
                  {job.period}
                </span>
              </div>
              <p className={styles.Experience__company}>
                {job.company} · {job.location}
              </p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
