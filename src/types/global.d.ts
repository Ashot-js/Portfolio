declare module "*.css";
declare module "*.scss";

export type Language = "en" | "ru" | "am";

export interface LanguageText {
  title: string;
  paragraphs: string[];
}

export interface LanguageOption {
  code: Language;
  label: string;
}

export interface SiteAge {
  years: number;
  months: number;
  days: number;
}
