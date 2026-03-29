import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.scss";

const PROJECTS = [
  {
    title: "Auth Gate",
    description:
      "Multi-app consumer authentication system with JWT tokens, role-based access control, refresh token rotation, and session management across microservices.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Redis"],
    github: "https://github.com/Ashot-js/Portfolio",
    live: null,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with product catalog, shopping cart, Stripe payment integration, order management, and admin dashboard with analytics.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/Ashot-js",
    live: null,
  },
  {
    title: "Real-Time Chat",
    description:
      "Scalable messaging platform with WebSocket connections, message persistence, user presence indicators, and Redis pub/sub for horizontal scaling.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com/Ashot-js",
    live: null,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with React 19, TypeScript, Vite, and Firebase. Features multilingual support, lazy-loaded routes, and responsive design.",
    tech: ["React 19", "TypeScript", "SCSS", "Vite", "Firebase"],
    github: "https://github.com/Ashot-js/Portfolio",
    live: null,
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with CRUD operations, user authentication, role permissions, pagination, filtering, and automated testing.",
    tech: ["Node.js", "Express", "PostgreSQL", "Jest", "Docker"],
    github: "https://github.com/Ashot-js",
    live: null,
  },
  {
    title: "Weather Dashboard",
    description:
      "Full-stack weather app with Node.js proxy server for API key security, Redis caching for rate limiting, city search, and 5-day forecasts.",
    tech: ["React", "TypeScript", "Node.js", "Redis", "REST API"],
    github: "https://github.com/Ashot-js",
    live: null,
  },
];

export default function Projects() {
  return (
    <div className="ProjectsPage">
      <div className="ProjectsPage_header">
        <h1 className="ProjectsPage_title">Projects</h1>
        <p className="ProjectsPage_subtitle">
          Full-stack applications I've designed and built — from database schema to deployed product.
        </p>
      </div>

      <div className="ProjectsPage_grid">
        {PROJECTS.map((project) => (
          <div key={project.title} className="PCard">
            <div className="PCard_top">
              <h3 className="PCard_title">{project.title}</h3>
              <p className="PCard_desc">{project.description}</p>
            </div>

            <div className="PCard_bottom">
              <div className="PCard_tech">
                {project.tech.map((t) => (
                  <span key={t} className="PCard_tag">{t}</span>
                ))}
              </div>

              <div className="PCard_links">
                <a href={project.github} target="_blank" rel="noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
