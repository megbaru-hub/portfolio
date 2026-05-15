import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    category: "Offensive Security",
    skills: ["Web Penetration Testing", "Vulnerability Assessment", "Burp Suite", "Metasploit", "Nmap"]
  },
  {
    category: "Blue Team & SIEM",
    skills: ["Threat Analysis", "Incident Response", "Log Analysis", "Wazuh", "SOC Operations"]
  },
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "Java", "SQL", "Bash"]
  },
  {
    category: "Web Development",
    skills: ["HTML/CSS", "React", "Node.js", "REST APIs", "Django"]
  },
];

const tools = ["Kali Linux", "Wireshark", "OWASP Top 10", "Docker", "Linux", "Git", "NIST Framework", "Splunk"];

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
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
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