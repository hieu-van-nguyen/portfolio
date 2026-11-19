import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

// Skills grouped from the "Summary of Qualifications" and job history in cv.pdf
const skillGroups = [
  {
    title: "Front End",
    skills: [
      { name: "React", level: "6+ years" },
      { name: "JavaScript", level: "6+ years" },
      { name: "jQuery", level: "6+ years" },
      { name: "TypeScript", level: "Apple, Walmart" },
      { name: "HTML / CSS", level: "Bootstrap" },
      { name: "ASP.NET / MVC", level: "5+ years" }
    ]
  },
  {
    title: "Back End",
    skills: [
      { name: "Java", level: "6+ years" },
      { name: "Spring Boot", level: "6+ years" },
      { name: "Node.js", level: "6+ years" },
      { name: "C# / .NET", level: "5+ years" },
      { name: "REST / SOAP / WCF", level: "6+ years" },
      { name: "Kafka", level: "Walmart" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MS SQL Server", level: "5+ years" },
      { name: "T-SQL / ETL", level: "5+ years" },
      { name: "PostgreSQL", level: "Walmart" },
      { name: "BigQuery", level: "Walmart" },
      { name: "COSMOS / SCOPE", level: "1+ year" },
      { name: "MySQL", level: "Learned" }
    ]
  },
  {
    title: "Automation",
    skills: [
      { name: "Selenium", level: "6+ years" },
      { name: "UI Automation", level: "6+ years" },
      { name: "Python", level: "6+ years" },
      { name: "Java", level: "6+ years" },
      { name: "Test Automation", level: "Microsoft, RIM" }
    ]
  },
  {
    title: "Testing",
    skills: [
      { name: "Unit / BVT", level: "5+ years" },
      { name: "API Testing", level: "5+ years" },
      { name: "UI / E2E", level: "5+ years" },
      { name: "Performance / Stress", level: "5+ years" },
      { name: "Security Testing", level: "5+ years" },
      { name: "MS Test / WTT", level: "2 years" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Docker", level: "3+ years" },
      { name: "Terraform", level: "3+ years" },
      { name: "Git / Jenkins", level: "CI/CD" },
      { name: "Jira", level: "Agile" },
      { name: "Azure / GCP", level: "Microsoft, Walmart" },
      { name: "AWS / OCI", level: "Amazon, Oracle" }
    ]
  },
  {
    title: "AI",
    skills: [
      { name: "AI / ML", level: "1+ year" },
      { name: "Predictive Models", level: "Churn, login failure" },
      { name: "AI Agents", level: "Payment mismatch" },
      { name: "Claude Code", level: "AI-assisted dev" },
      { name: "LLM Tooling", level: "Apple DevX" },
      { name: "Certificates", level: "Google, Meta" }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {skillGroups.map(({ title, skills }) => (
          <div key={title} className="experience__group">
            <h3>{title}</h3>
            <div className="experience__content">
              {skills.map(({ name, level }) => (
                <article key={name} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{name}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
