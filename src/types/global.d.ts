export type Language = "en" | "ru" | "hy";

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
