// types.ts
// ----------------------------
// CSS / SCSS
declare module "*.css";
declare module "*.scss";

// react-slick
declare module "react-slick" {
  import * as React from "react";

  export interface SliderProps {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    adaptiveHeight?: boolean;
    lazyLoad?: "ondemand" | "progressive";
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    draggable?: boolean;
    swipe?: boolean;
    swipeToSlide?: boolean;
  }

  const Slider: React.ForwardRefExoticComponent<
    SliderProps & React.RefAttributes<Slider>
  > & {
    slickNext(): void;
    slickPrev(): void;
  };

  export default Slider;
}

// ----------------------------
// Пользователи
export interface User {
  id: number;
  email: string;
  password: string; // пароль нужен только для json-server, не хранить в Redux
}

// ----------------------------
// Типы для языка
export type Language = "en" | "ru" | "fr" | "it" | "am" | "de";

export interface LanguageText {
  title: string;
  paragraphs: string[];
}

export interface LanguageOption {
  code: Language;
  label: string;
}

// ----------------------------
// Таймеры
export type BrowserTimer = ReturnType<typeof setTimeout> | null;

// ----------------------------
// Возраст сайта / разница в датах
export interface SiteAge {
  years: number;
  months: number;
  days: number;
}

// ----------------------------
// Firebase
import type { FirebaseApp } from "firebase/app";
import type { Firestore } from "firebase/firestore";
import type { Auth } from "firebase/auth";

export interface FirebaseServices {
  app: FirebaseApp;
  db: Firestore;
  auth: Auth;
}

// ----------------------------
// Универсальные API типы (для JSON-server или твоего backend)
export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string; // ISO string
}

export interface Comment {
  id: number;
  postId: number;
  authorId: number;
  text: string;
  createdAt: string; // ISO string
}

export interface Profile {
  id: number;
  userId: number;
  username: string;
  avatarUrl?: string;
}

// ----------------------------
// Формы (Login / Register)
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  confirmPassword: string;
}
/// <reference types="vite/client" />

 export interface ImportMetaEnv {
  readonly VITE_SITE_START: string;

  // Firebase variables
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
}

 export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
// Для логина
export interface LoginFormData {
  email: string;
  password: string;
}