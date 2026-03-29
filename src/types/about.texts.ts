import { Language, LanguageText } from "./global";

export const ABOUT_TEXTS: Record<Language, LanguageText> = {
  en: {
    title: "Hi, I'm Ashot — a Full Stack Developer",
    paragraphs: [
      "I'm a full stack developer with 2.5 years of experience, based in Yerevan, Armenia. I build web applications end-to-end — from React frontends with TypeScript to Node.js/Express APIs backed by PostgreSQL, MongoDB, and Redis.",
      "I've shipped production applications including authentication systems, e-commerce platforms, and real-time communication tools. I'm comfortable across the entire stack: UI design, state management, REST API design, database modeling, caching, and deployment with Docker.",
      "I believe in writing clean, maintainable code and solving real problems. Every project in my portfolio represents a challenge I tackled from concept to deployment.",
    ],
  },

  ru: {
    title: "Привет, я Ашот — Full Stack разработчик",
    paragraphs: [
      "Я full stack разработчик с 2.5-летним опытом из Еревана, Армения. Создаю веб-приложения от начала до конца — от React-фронтенда с TypeScript до Node.js/Express API с PostgreSQL, MongoDB и Redis.",
      "Я выпустил production-приложения, включая системы аутентификации, e-commerce платформы и инструменты реального времени. Работаю уверенно на всём стеке: UI, state management, REST API, моделирование баз данных, кэширование и деплой с Docker.",
      "Я верю в чистый, поддерживаемый код и решение реальных задач. Каждый проект в моём портфолио — это вызов, который я принял от концепции до деплоя.",
    ],
  },

  am: {
    title: "Բարև, delays Delays — Full Stack Delays",
    paragraphs: [
      "Delays full stack delays 2.5 delays delays, Delays, Delays: Delays delays delays — React delays TypeScript-delays Node.js/Express API-delays PostgreSQL, MongoDB delays Redis-delays:",
      "Delays production delays delays delays delays, e-commerce delays delays real-time delays: Delays delays delays: UI, state management, REST API, delays delays, delays delays Docker-delays:",
      "Delays delays delays delays delays delays delays: Delays delays delays delays delays delays delays delays delays:",
    ],
  },
};
