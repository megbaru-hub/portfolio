import { motion } from "framer-motion";
import me from "../assets/meg.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Protecting Digital Assets</h2>
        </motion.div>

        <div className="about-layout">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={me} alt="Megbaru Dessie" />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm <strong>Megbaru Dessie</strong>, a Cyber Security enthusiast based in Ethiopia. 
              I'm passionate about protecting digital systems from threats and continuously learning 
              new security techniques.
            </p>
            <p>
              My journey in cyber security started with a strong interest in understanding how systems 
              work and how they can be exploited. I've developed skills in penetration testing, 
              vulnerability assessment, and blue team operations.
            </p>
            <p>
              I completed a 2-month internship at <strong>INSA</strong> (Information Network Security Agency) 
              where I gained hands-on experience in web application security testing. This experience 
              strengthened my practical skills in identifying and documenting security vulnerabilities.
            </p>
            <p>
              I'm familiar with programming languages like Python, JavaScript, and Java, along with 
              web technologies including HTML, CSS, and React. I'm familiar with security tools like 
              Burp Suite, Nmap, Wireshark, and have knowledge of OWASP Top 10 vulnerabilities.
            </p>
            <p>
              Currently, I'm building real-world security projects and looking for opportunities to 
              apply my skills in professional security roles while contributing to making the 
              digital world safer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}