import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";

const slides = [
  { id: 1, src: "/images/slide1.webp" },
  { id: 2, src: "/images/slide2.webp" },
  { id: 3, src: "/images/slide3.webp" },
  { id: 4, src: "/images/slide4.webp" },
  { id: 5, src: "/images/slide5.webp" },
];

export default function Home() {
  const sliderRef = useRef<Slider>(null);

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
    swipeToSlide: true,
  };

  return (
    <section className="Home">
      <h2 className="Home_title">The staggering scale of the universe.</h2>

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

        <p className="Home_subtext">
          We are literally made of stardust, as the elements of our bodies were
          forged in the hearts of ancient stars
        </p>

        {/* navigation */}
        <div
          className="Home_prev"
          role="button"
          aria-label="Previous slide"
          onClick={() => sliderRef.current?.slickPrev()}
        />

        <div
          className="Home_next"
          role="button"
          aria-label="Next slide"
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
    </section>
  );
}
