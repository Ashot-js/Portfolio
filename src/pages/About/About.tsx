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
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Production Projects & Freelance",
    description: "Building end-to-end web applications with React, Node.js, Express, PostgreSQL, and MongoDB. Designing REST APIs, implementing authentication, managing deployments with Docker.",
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Internship & Contract Work",
    description: "Developed and maintained React/TypeScript applications, integrated third-party APIs, implemented state management with Redux, and collaborated in agile teams.",
  },
  {
    period: "2023 — Present",
    role: "Full Stack Projects & Open Source",
    company: "Personal",
    description: "Built production-grade applications including authentication systems, e-commerce platforms, real-time chat, and this portfolio — covering frontend, backend, databases, and caching with Redis.",
  },
];

const EDUCATION = [
  {
    period: "2023 — Present",
    degree: "Computer Science",
    school: "University (to be updated)",
    details: "Studying core CS fundamentals including algorithms, data structures, networking, databases, and software engineering principles.",
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
