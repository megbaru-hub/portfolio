import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "M-Movie",
    label: "Web App",
    desc: "Movie discovery platform with real-time search, trailer previews, and personalized recommendations.",
    tech: ["TypeScript", "React", "API Integration"],
    github: "https://github.com/megbaru-hub/M-Movie",
    demo: "https://m-movie-omega.vercel.app",
  },
  {
    title: "Threat Intelligence Platform",
    label: "Security",
    desc: "Platform for collecting, analyzing, and sharing threat intelligence data with real-time analysis.",
    tech: ["Python", "Security", "MIT License"],
    github: "https://github.com/megbaru-hub/threat-intelligence-platform",
    demo: "",
  },
  {
    title: "AI Threat Platform",
    label: "Security",
    desc: "AI-powered security platform leveraging machine learning for advanced threat detection.",
    tech: ["Python", "Machine Learning", "AI"],
    github: "https://github.com/megbaru-hub/ai-threat-platform",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A selection of security tools and web applications I've built
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="project-header">
                <span className="project-category">{p.label}</span>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GitFork size={16} />
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com/megbaru-hub" target="_blank" rel="noopener noreferrer" className="view-more">
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}