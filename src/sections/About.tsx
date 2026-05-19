import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-description">
            Cyber security professional based in Ethiopia
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            I'm <strong>Megbaru Dessie</strong>, a Cyber Security enthusiast 
            passionate about penetration testing, vulnerability assessment, 
            and web application security.
          </p>
          <p>
            I completed a 2-month internship at <strong>INSA</strong> where I 
            gained hands-on experience in security testing using Burp Suite, 
            OWASP methodologies, and manual testing techniques.
          </p>
          <p>
            I work with Python, JavaScript, React, and Java alongside security 
            tools like Nmap, Wireshark, and Kali Linux. I'm actively looking 
            for opportunities to apply my skills in professional security roles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}