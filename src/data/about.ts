export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "hy", label: "Հայերեն" },
] as const;

export type Language = (typeof LANGUAGES)[number]["code"];

export const ABOUT_TEXTS: Record<Language, { title: string; paragraphs: string[] }> = {
  en: {
    title: "Hi, I'm Ashot — a Full Stack Developer",
    paragraphs: [
      "I'm a full stack developer with 3+ years of experience, based in Yerevan, Armenia. I build web applications end-to-end — from React frontends with TypeScript to Node.js/Express APIs backed by PostgreSQL, MongoDB, and Redis.",
      "I've shipped production applications including authentication systems, e-commerce platforms, and real-time communication tools. I'm comfortable across the entire stack: UI design, state management, REST API design, database modeling, caching, and deployment with Docker.",
      "I believe in writing clean, maintainable code and solving real problems. Every project in my portfolio represents a challenge I tackled from concept to deployment.",
    ],
  },

  ru: {
    title: "Привет, я Ашот — Full Stack разработчик",
    paragraphs: [
      "Я full stack разработчик с опытом более 3 лет из Еревана, Армения. Создаю веб-приложения от начала до конца — от React-фронтенда с TypeScript до Node.js/Express API с PostgreSQL, MongoDB и Redis.",
      "Я выпустил production-приложения, включая системы аутентификации, e-commerce платформы и инструменты реального времени. Работаю уверенно на всём стеке: UI, state management, REST API, моделирование баз данных, кэширование и деплой с Docker.",
      "Я верю в чистый, поддерживаемый код и решение реальных задач. Каждый проект в моём портфолио — это вызов, который я принял от концепции до деплоя.",
    ],
  },

  hy: {
    title: "Ողջույն, ես Աշոտն եմ՝ Full Stack ծրագրավորող",
    paragraphs: [
      "Ես Full-stack ծրագրավորող եմ Երևանից՝ 3+ տարվա փորձով։ Մշակում եմ վեբ հավելվածներ սկզբից մինչև վերջ՝ React frontend-ից (TypeScript-ով) մինչև Node.js/Express API-ներ, որոնք աշխատում են PostgreSQL, MongoDB և Redis տվյալների բազաներով։ ",
      "Իմ փորձառությունը ներառում է պատրաստի պրոդուկտների թողարկում, այդ թվում՝ նույնականացման համակարգեր (authentication), էլեկտրոնային առևտրի հարթակներ և իրական ժամանակում հաղորդակցման գործիքներ։ Ազատ տիրապետում եմ ամբողջ ստեկին՝ UI դիզայն, state management, REST API-ների նախագծում, տվյալների բազաների մոդելավորում, քեշավորում և դեպլոյ (deployment)՝ Docker-ի կիրառմամբ։ ",
      "Կողմնակից եմ մաքուր, պահպանվող կոդ գրելուն և իրական խնդիրներ լուծելուն։ Իմ պորտֆոլիոյի յուրաքանչյուր նախագիծ մի մարտահրավեր է, որը ես հաղթահարել եմ՝ գաղափարից մինչև վերջնական թողարկում"
    ],
  },
};

export const EXPERIENCE = [
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

export const EDUCATION = [
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
