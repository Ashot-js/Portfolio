export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  /** Shown in "Featured Projects" on the home page. */
  featured?: boolean;
}

const FREE_TIER_NOTE =
  " Hosted on a free tier — the first load may take up to 1 minute while the server wakes up.";

export const PROJECTS: Project[] = [
  {
    title: "gtnel.com — Business Directory",
    description:
      "Live business directory for Armenia on its own domain: categories, reviews, job listings, chat, owner and admin moderation, SEO. Runs on my own server with HTTPS, monitoring and backups.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    live: "https://gtnel.com",
    featured: true,
  },
  {
    title: "Auth Gate",
    description:
      "Multi-app consumer authentication system with JWT tokens, role-based access control, refresh token rotation, and session management across microservices.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Redis"],
    github: "https://github.com/Ashot-js/auth-gate",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with product catalog, shopping cart, Stripe payment integration, order management, and admin dashboard with analytics." +
      FREE_TIER_NOTE,
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/Ashot-js/ecommerce-luxecart",
    live: "https://ecommerce-luxecart.web.app",
    featured: true,
  },
  {
    title: "Real-Time Chat",
    description:
      "Scalable messaging platform with WebSocket connections, message persistence, user presence indicators, and Redis pub/sub for horizontal scaling." +
      FREE_TIER_NOTE,
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com/Ashot-js/realChatBot",
    live: "https://realchatbot-app.web.app",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with React 19, TypeScript, Vite, and Firebase. Features multilingual support, lazy-loaded routes, and responsive design.",
    tech: ["React 19", "TypeScript", "SCSS", "Vite", "Firebase"],
    github: "https://github.com/Ashot-js/Portfolio",
    live: "https://mysite2025-25a7b.web.app",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with CRUD operations, user authentication, role permissions, pagination, filtering, and automated testing.",
    tech: ["Node.js", "Express", "PostgreSQL", "Jest", "Docker"],
    github: "https://github.com/Ashot-js/task-manager-api",
    live: "https://task-manager-api-3t5y.onrender.com/docs",
  },
  {
    title: "Weather Dashboard",
    description:
      "Full-stack weather app with Node.js proxy server for API key security, Redis caching for rate limiting, city search, and 5-day forecasts.",
    tech: ["React", "TypeScript", "Node.js", "Redis", "REST API"],
    github: "https://github.com/Ashot-js/my-weather-app",
    live: "https://pogoda-weather-app.web.app",
    featured: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
