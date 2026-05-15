import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </div>
      
      <div className="hero-container">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot" />
          Open to opportunities
        </motion.div>
        
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I'm <span className="highlight">Megbaru Dessie</span>
        </motion.h1>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cyber Security Specialist specializing in protecting digital infrastructure 
          through expert threat analysis, vulnerability assessment, and robust security solutions.
        </motion.p>
        
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Get in Touch
            <ArrowRight size={18} />
          </a>
          <a href="https://t.me/Megbaru22" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Download size={18} />
            Telegram
          </a>
        </motion.div>
        
        <motion.div
          className="hero-contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="contact-item">megbde32@gmail.com</span>
          <span className="contact-divider">|</span>
          <span className="contact-item">+251 924 518 788</span>
          <span className="contact-divider">|</span>
          <span className="contact-item">Ethiopia</span>
        </motion.div>
      </div>
      
      <div className="hero-scroll">
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>Scroll to explore</span>
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}