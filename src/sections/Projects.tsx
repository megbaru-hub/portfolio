import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, GitFork } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "M-Movie",
    category: "Web Application",
    description: "A feature-rich movie discovery platform with real-time search, trailer previews, and personalized recommendations.",
    tech: ["TypeScript", "React", "API Integration"],
    github: "https://github.com/megbaru-hub/M-Movie",
    demo: "https://m-movie-omega.vercel.app",
    featured: true
  },
  {
    title: "Threat Intelligence Platform",
    category: "Security",
    description: "A comprehensive platform for collecting, analyzing, and sharing threat intelligence data. Helps organizations identify and respond to emerging threats.",
    tech: ["Python", "Security", "MIT License"],
    github: "https://github.com/megbaru-hub/threat-intelligence-platform",
    demo: "",
    featured: true
  },
  {
    title: "AI Threat Platform",
    category: "Security",
    description: "An AI-powered security platform leveraging machine learning for advanced threat detection and analysis.",
    tech: ["Python", "Machine Learning", "AI"],
    github: "https://github.com/megbaru-hub/ai-threat-platform",
    demo: "",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects">
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
            A selection of projects showcasing my expertise in security and web development.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View on GitHub">
                    <GitFork size={18} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="View live demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="project-title">
                {project.title}
                <ArrowUpRight size={20} className="title-arrow" />
              </h3>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/megbaru-hub" target="_blank" rel="noopener noreferrer" className="view-more">
            View all on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}