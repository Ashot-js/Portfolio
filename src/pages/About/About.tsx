import { useState } from "react";
import "./About.scss";

import { Language, LanguageOption } from "../../types/global";
import { ABOUT_TEXTS } from "../../types/about.texts";
import Button from "../../components/ui/button/Button";

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "am", label: "Հայերեն" },
];

const EXPERIENCE = [
  {
    period: "2023 — Present",
    role: "Full Stack Developer",
    company: "Production Projects & Freelance",
    description: "Building end-to-end web applications with React, TypeScript and Redux Toolkit; Node.js/Express REST APIs with JWT authentication; PostgreSQL, MongoDB and Redis caching; real-time features with Socket.io and testing with Jest. Deploying with Docker, Firebase and AWS, managing servers over SSH and Cloudflare (DNS, SSL/HTTPS, CDN, protection). Using AI tools (Claude, Codex, Cursor) to speed up development.",
  },
  {
    period: "2023 — Present",
    role: "JavaScript Instructor",
    company: "Online Courses",
    description: "Teaching JavaScript, TypeScript, React, Node.js, Git/GitHub and Docker to beginner and intermediate students. Creating learning materials and hands-on projects.",
  },
];

const EDUCATION = [
  {
    period: "2023 — 2024",
    degree: "Diploma — Full-Stack Web Development",
    school: "Cube Academy",
    details: "Completed a full-stack web development program at one of the best IT schools in Yerevan.",
  },
  {
    period: "Incomplete",
    degree: "Computer Science",
    school: "Artsakh State University",
    details: "Studied core CS fundamentals including algorithms, data structures, networking, databases, and software engineering principles. Studies were interrupted by the Artsakh war.",
  },
];

export default function About() {
  const [lang, setLang] = useState<Language>("en");
  const [open, setOpen] = useState(false);

  return (
    <div className="AboutPage">
      <section className="About_hero">
        <div className="About_avatar">AG</div>
        <h1 className="About_name">Ashot Grigoryan</h1>
        <p className="About_role">Full Stack Developer</p>
        <p className="About_location">Armenia, Yerevan</p>
      </section>

      <section className="About_section">
        <div className="About_sectionHeader">
          <h2 className="About_sectionTitle">About Me</h2>
          <div className="About_lang">
            <Button
              variant="lang"
              onClick={() => setOpen((p) => !p)}
              aria-expanded={open}
              aria-haspopup="listbox"
            >
              {LANGUAGES.find((l) => l.code === lang)?.label}
            </Button>
            {open && (
              <div className="About_menu" role="listbox">
                {LANGUAGES.map((l) => (
                  <Button
                    key={l.code}
                    variant="lang"
                    role="option"
                    aria-selected={l.code === lang}
                    className={l.code === lang ? "active" : ""}
                    onClick={() => { setLang(l.code); setOpen(false); }}
                  >
                    {l.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="About_bio">
          <h3 className="About_bioTitle">{ABOUT_TEXTS[lang].title}</h3>
          {ABOUT_TEXTS[lang].paragraphs.map((p, i) => (
            <p key={i} className="About_bioText">{p}</p>
          ))}
        </div>
      </section>

      <section className="About_section">
        <h2 className="About_sectionTitle">Experience</h2>
        <div className="Timeline">
          {EXPERIENCE.map((item) => (
            <div key={item.role} className="Timeline_item">
              <div className="Timeline_dot" />
              <div className="Timeline_content">
                <span className="Timeline_period">{item.period}</span>
                <h3 className="Timeline_role">{item.role}</h3>
                <p className="Timeline_company">{item.company}</p>
                <p className="Timeline_desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="About_section">
        <h2 className="About_sectionTitle">Education</h2>
        <div className="Timeline">
          {EDUCATION.map((item) => (
            <div key={item.degree} className="Timeline_item">
              <div className="Timeline_dot" />
              <div className="Timeline_content">
                <span className="Timeline_period">{item.period}</span>
                <h3 className="Timeline_role">{item.degree}</h3>
                <p className="Timeline_company">{item.school}</p>
                <p className="Timeline_desc">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
