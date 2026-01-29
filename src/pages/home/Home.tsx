import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";

// Массив слайдов
const slides = [
  { id: 1, src: "/images/slide1.jpg" },
  { id: 2, src: "/images/slide2.jpg" },
  { id: 3, src: "/images/slide3.jpg" },
  { id: 4, src: "/images/slide4.jpg" },
  { id: 5, src: "/images/slide5.jpg" },
  { id: 6, src: "/images/slide6.jpg" },
  { id: 7, src: "/images/slide7.jpg" },
  { id: 8, src: "/images/slide8.jpg" }
];

export default function Home() {
  // ref для доступа к методам Slider
  const sliderRef = useRef<Slider>(null);

  // Настройки слайдера
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true
  };

  return (
    <section className="Home">
      {/* Заголовок страницы */}
      <h2 className="Home_title">The staggering scale of the universe.</h2>

      {/* Слайдер */}
      <div className="Home_sliderWrapper">
        <div className="Home_sliderInner">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="Home_slide">
                <img src={slide.src} alt={`slide-${slide.id}`} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Текст под слайдером */}
        <p className="Home_subtext">
          We are literally made of stardust, as the elements of our bodies were forged in the hearts of ancient stars
        </p>

        {/* Кнопки навигации */}
        <button
          className="Home_prev"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous slide"
        />
        <button
          className="Home_next"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next slide"
        />
      </div>
    </section>
  );
}
