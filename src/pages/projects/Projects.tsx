import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../../data/projects";
import "./Projects.scss";


export default function Projects() {
  return (
    <div className="ProjectsPage">
      <div className="ProjectsPage_header">
        <h1 className="ProjectsPage_title">Projects</h1>
        <p className="ProjectsPage_subtitle">
          Full-stack applications I've designed and built — from database schema
          to deployed product.
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
                  <span key={t} className="PCard_tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="PCard_links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    title="Live Demo"
                  >
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
