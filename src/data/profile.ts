export const PROFILE = {
  email: "ashotg771@gmail.com",
  location: "Yerevan, Armenia",
  github: "https://github.com/Ashot-js",
  linkedin: "https://www.linkedin.com/in/ashot-grigoryan-a0a21a391",
  telegram: "https://t.me/FullStack_AG",
} as const;

/** "https://www.github.com/x" -> "github.com/x" */
export const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");
