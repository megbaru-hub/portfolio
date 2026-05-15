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
          <p className="section-description">
            Update this section with your professional summary.
          </p>
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
            <p className="placeholder-text">
              Add your professional summary, background, and expertise here.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}