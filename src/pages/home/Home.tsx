import { Link } from "react-router";
import {
  FaReact, FaJsSquare, FaGitAlt, FaNodeJs, FaGithub, FaDocker, FaDatabase, FaRobot,
} from "react-icons/fa";
import {
  SiTypescript, SiRedux, SiFirebase, SiSass, SiVite, SiMongodb, SiPostgresql, SiExpress, SiRedis, SiOpenai,
} from "react-icons/si";
import { BsStars } from "react-icons/bs";
import "./Home.scss";

const SKILLS = [
  // Backend (highlighted)
  { icon: <FaNodeJs />, name: "Node.js", highlight: true },
  { icon: <SiExpress />, name: "Express", highlight: true },
  { icon: <SiPostgresql />, name: "PostgreSQL", highlight: true },
  { icon: <SiMongodb />, name: "MongoDB", highlight: true },
  { icon: <SiRedis />, name: "Redis", highlight: true },
  // Frontend
  { icon: <FaReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiSass />, name: "SCSS" },
  // DevOps & Tools
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaDatabase />, name: "REST APIs" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiVite />, name: "Vite" },
  // AI Tooling
  { icon: <BsStars />, name: "Claude" },
  { icon: <SiOpenai />, name: "Codex" },
  { icon: <FaRobot />, name: "Cursor" },
];

const FEATURED_PROJECTS = [
  {
    title: "Auth Gate",
    description: "Multi-app consumer authentication system with JWT tokens, role-based access control, and session management across microservices.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Ashot-js/Portfolio",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with product catalog, cart, checkout, payment integration, and admin dashboard.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/Ashot-js",
  },
  {
    title: "Real-Time Chat",
    description: "Scalable messaging platform with WebSocket connections, message persistence, user presence, and Redis pub/sub for horizontal scaling.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Socket.io"],
    github: "https://github.com/Ashot-js",
  },
];

function Home() {
  return (
    <div className="Home">
      <section className="Hero">
        <div className="Hero_content">
          <p className="Hero_greeting">Hi, I'm</p>
          <h1 className="Hero_name">Ashot Grigoryan</h1>
          <h2 className="Hero_title">Full Stack Developer</h2>
          <p className="Hero_tagline">
            2.5 years of experience building modern web applications end-to-end.
            From React frontends to Node.js APIs and database design — I deliver
            full-stack solutions with clean, production-ready code.
          </p>
          <div className="Hero_actions">
            <Link to="/projects" className="Hero_btn Hero_btn--primary">
              View Projects
            </Link>
            <Link to="/contact" className="Hero_btn Hero_btn--secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="Hero_visual">
          <div className="Hero_codeBlock">
            <span className="Hero_codeLine"><span className="c-keyword">const</span> <span className="c-var">developer</span> = {"{"}</span>
            <span className="Hero_codeLine Hero_codeLine--indent"><span className="c-key">name</span>: <span className="c-string">'Ashot Grigoryan'</span>,</span>
            <span className="Hero_codeLine Hero_codeLine--indent"><span className="c-key">role</span>: <span className="c-string">'Full Stack Developer'</span>,</span>
            <span className="Hero_codeLine Hero_codeLine--indent"><span className="c-key">experience</span>: <span className="c-string">'2.5 years'</span>,</span>
            <span className="Hero_codeLine Hero_codeLine--indent"><span className="c-key">frontend</span>: [<span className="c-string">'React'</span>, <span className="c-string">'TypeScript'</span>, <span className="c-string">'Redux'</span>],</span>
            <span className="Hero_codeLine Hero_codeLine--indent"><span className="c-key">backend</span>: [<span className="c-string">'Node.js'</span>, <span className="c-string">'Express'</span>, <span className="c-string">'MongoDB'</span>],</span>
            <span className="Hero_codeLine">{"}"}</span>
          </div>
        </div>
      </section>

      <section className="Skills">
        <h2 className="Section_title">Tech Stack</h2>
        <div className="Skills_grid">
          {SKILLS.map((skill) => (
            <div key={skill.name} className={`Skills_item ${skill.highlight ? "Skills_item--highlight" : ""}`}>
              <span className="Skills_icon">{skill.icon}</span>
              <span className="Skills_name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="Featured">
        <h2 className="Section_title">Featured Projects</h2>
        <div className="Featured_grid">
          {FEATURED_PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="ProjectCard"
            >
              <h3 className="ProjectCard_title">{project.title}</h3>
              <p className="ProjectCard_desc">{project.description}</p>
              <div className="ProjectCard_tech">
                {project.tech.map((t) => (
                  <span key={t} className="ProjectCard_tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="Featured_cta">
          <Link to="/projects" className="Hero_btn Hero_btn--secondary">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
