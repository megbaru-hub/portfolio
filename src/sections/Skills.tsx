import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    category: "Offensive Security",
    skills: [
      { name: "Web Penetration Testing", level: 90 },
      { name: "Vulnerability Assessment", level: 95 },
      { name: "Burp Suite", level: 85 },
      { name: "Metasploit", level: 80 },
    ]
  },
  {
    category: "Blue Team & SIEM",
    skills: [
      { name: "Threat Analysis", level: 85 },
      { name: "Incident Response", level: 80 },
      { name: "Log Analysis", level: 90 },
      { name: "Wazuh / SIEM Tools", level: 85 },
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 85 },
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "REST APIs", level: 80 },
    ]
  },
];

const tools = ["Nmap", "Wireshark", "OWASP", "Kali Linux", "Docker", "Linux", "Git", "NIST"];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            Skills and tools I use to secure systems and find vulnerabilities.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h3 className="group-title">{group.category}</h3>
              <div className="skills-list">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: groupIndex * 0.1 + skillIndex * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-tools"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-list">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                className="tool-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}