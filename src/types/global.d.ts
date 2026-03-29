export interface User {
  id: number | string;
  email: string;
  password?: string;
}

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

export type BrowserTimer = ReturnType<typeof setTimeout> | null;

export interface SiteAge {
  years: number;
  months: number;
  days: number;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  confirmPassword: string;
}
