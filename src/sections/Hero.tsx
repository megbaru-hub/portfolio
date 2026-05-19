import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Hero.css";
import me from "../assets/meg.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-bg-shape shape-1" />
        <div className="hero-bg-shape shape-2" />
      </div>
      
      <div className="hero-container">
        <div className="hero-inner">
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={me} alt="Megbaru Dessie" />
          </motion.div>

          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero-badge">Cyber Security</span>
            </motion.div>
            
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Megbaru Dessie
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I find vulnerabilities before others do. Focused on 
              web application security, threat detection, and infrastructure defense.
            </motion.p>
            
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                View Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Contact Me
              </a>
            </motion.div>
            
            <motion.div
              className="hero-contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="mailto:megbde32@gmail.com" className="contact-link">megbde32@gmail.com</a>
              <span className="contact-divider">/</span>
              <a href="https://t.me/Megbaru22" target="_blank" rel="noopener noreferrer" className="contact-link">@Megbaru22</a>
              <span className="contact-divider">/</span>
              <span className="contact-link">Ethiopia</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}