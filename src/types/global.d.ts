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

  // Slider как компонент JSX с поддержкой ref
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

// Интерфейс текста на языке
export interface LanguageText {
  title: string;
  paragraphs: string[];
}

// Интерфейс для кнопки выбора языка
export interface LanguageOption {
  code: Language;
  label: string;
}
