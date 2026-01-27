import { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.scss";

// картинки из public/images
const slides = [
  { id: 1, src: "/images/slide1.jpg" },
  { id: 2, src: "/images/slide2.jpg" },
  { id: 3, src: "/images/slide3.jpg" },
  { id: 4, src: "/images/slide4.jpg" },
  { id: 5, src: "/images/slide5.jpg" },
  { id: 6, src: "/images/slide6.jpg" },
  { id: 7, src: "/images/slide7.jpg" },
];

export default function Home() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true, // зацикленный
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // свои кнопки
    adaptiveHeight: true,
    lazyLoad: "ondemand" as const,
    draggable: true,   // ⬅ для drag мышкой
    swipe: true,       // ⬅ для свайпа пальцем
    swipeToSlide: true // ⬅ перетаскивание до следующего слайда
  };

  return (
    <section className="Home">
      <h2 className="Home_title">Our Priceless Nature</h2>
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

  {/* кнопки без текста */}
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
