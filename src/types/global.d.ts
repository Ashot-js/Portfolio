// User.ts
export interface User {
  id: number;
  email: string;
  password: string; // пароль нужен только для запросов к json-server, не хранить в Redux
}

// types.ts
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

// Тип языка
export type Language = "en" | "ru" | "fr" | "it" | "am" | "de";

export type BrowserTimer = ReturnType<typeof setTimeout>; // это работает для setTimeout и setInterval

export interface LanguageText {
  title: string;
  paragraphs: string[];
}

export interface LanguageOption {
  code: Language;
  label: string;
}
