import { motion } from "framer-motion";
import "./Experience.css";

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
            Update this section with your work history and achievements.
          </p>
        </motion.div>

        <motion.div
          className="experience-placeholder"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="placeholder-text">Add your experience here</p>
        </motion.div>
      </div>
    </section>
  );
}