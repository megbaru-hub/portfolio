import { motion } from "framer-motion";
import "./Skills.css";

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
            Update this section with your security skills and competencies.
          </p>
        </motion.div>

        <motion.div
          className="skills-placeholder"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="placeholder-text">Add your security skills here</p>
        </motion.div>
      </div>
    </section>
  );
}