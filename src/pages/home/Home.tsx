import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Тема и дополнительные стили slick
import "./Home.scss";

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
  // Основной React-компонент страницы Home
  const sliderRef = useRef<Slider | null>(null);
  // ref для доступа к методам слайдера (prev / next)

  const settings = {
    // Объект настроек для react-slick
    dots: true,
    // Показывать точки навигации снизу
    infinite: true,
    // Бесконечная прокрутка слайдов
    speed: 500,
    // Скорость анимации переключения (в миллисекундах)
    slidesToShow: 1,
    // Сколько слайдов показывать одновременно
    slidesToScroll: 1,
    // Сколько слайдов перелистывать за раз
    arrows: false,
    // Отключаем стандартные стрелки slick
    adaptiveHeight: true,
    // Высота слайдера подстраивается под контент

    draggable: true,
    // Возможность перетаскивать мышкой

    swipe: true,
    // Возможность свайпать пальцем

    swipeToSlide: true,
    // Переход к следующему слайду при свайпе
  };

  return (
    // JSX-разметка компонента
    <section className="Home">
      {/* Основной контейнер страницы */}

      <h2 className="Home_title">Our Priceless Nature</h2>
      {/* Заголовок страницы */}

      <div className="Home_sliderWrapper">
        {/* Обёртка слайдера (нужна для кнопок и позиционирования) */}

        <div className="Home_sliderInner">
          {/* Внутренний контейнер слайдера */}

          <Slider ref={sliderRef} {...settings}>
            {/* Компонент Slider с настройками и ref */}

            {slides.map((slide) => (
              // Перебор массива слайдов

              <div key={slide.id} className="Home_slide">
                {/* Один слайд */}

                <img src={slide.src} alt={`slide-${slide.id}`} />
                {/* Картинка слайда */}
              </div>
            ))}
          </Slider>
        </div>

        {/* 🌿 текст под заголовком */}
        <p className="Home_subtext">
          {/* Описательный текст под заголовком с анимацией */}

          Nature is a timeless masterpiece, breathing life into the world,
          {/* Первая часть текста */}

          inspiring harmony, peace, and a deep connection between humanity and Earth.
          {/* Вторая часть текста */}
        </p>

        <button
          className="Home_prev"
          // Кнопка перехода к предыдущему слайду

          onClick={() => sliderRef.current?.slickPrev()}
          // При клике вызываем метод slickPrev()

          aria-label="Previous slide"
          // Атрибут доступности
        />
        {/* Кнопка "назад" без текста */}

        <button
          className="Home_next"
          // Кнопка перехода к следующему слайду

          onClick={() => sliderRef.current?.slickNext()}
          // При клике вызываем метод slickNext()

          aria-label="Next slide"
          // Атрибут доступности
        />
        {/* Кнопка "вперёд" без текста */}
      </div>
    </section>
  );
}
