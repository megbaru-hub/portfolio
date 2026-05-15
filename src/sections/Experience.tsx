import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    role: "Penetration Testing Intern",
    company: "INSA (Information Network Security Agency)",
    location: "Addis Ababa, Ethiopia",
    period: "2025",
    description: "Focused on web application security testing and vulnerability assessment during a 2-month intensive internship program.",
    achievements: [
      "Performed penetration testing on web applications using Burp Suite and manual testing techniques",
      "Identified and documented critical vulnerabilities including SQL injection and XSS flaws",
      "Conducted security assessments and prepared detailed technical reports",
      "Learned industry-standard methodologies including OWASP Top 10 testing"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            My professional journey in cyber security.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot" />
                {index < experiences.length - 1 && <div className="marker-line" />}
              </div>
              
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="timeline-location">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
                
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                
                <p className="timeline-description">{exp.description}</p>
                
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}