// CSS / SCSS
declare module "*.css";
declare module "*.scss";

// react-slick
declare module "react-slick" {
  import * as React from "react";

  interface SliderProps {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    adaptiveHeight?: boolean;
    lazyLoad?: "ondemand" | "progressive";
    children?: React.ReactNode;
  }

  export default class Slider extends React.Component<SliderProps> {
    slickNext(): void;
    slickPrev(): void;
  }
}
