import React, { useCallback, useEffect, useRef, useState } from "react";
import Tech1 from "../assets/tech1.avif";
import Tech2 from "../assets/tech2.avif";
import Tech3 from "../assets/tech3.avif";
import Tech4 from "../assets/tech4.avif";
import Tech5 from "../assets/tech5.avif";
import Tech6 from "../assets/tech6.avif";
import Back from "../assets/prev.svg";
import Next from "../assets/next.svg";
import Carousel from "../components/carousel";
import Dot from "../components/Dot";
export const Home = () => {
  const timerRef = useRef(null);
  const CarouselItem = [
    { Image: Tech6 },
    { Image: Tech2 },
    { Image: Tech3 },
    { Image: Tech4 },
    { Image: Tech5 },
    { Image: Tech1 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = useCallback(() => {
    let currentBack =
      currentIndex === 0 ? CarouselItem.length - 1 : currentIndex - 1;
    setCurrentIndex(currentBack);
  }, [currentIndex, CarouselItem]);
  const goNext = () => {
    let currentNext =
      currentIndex === CarouselItem.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(currentNext);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goNext();
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [goNext]);
  const onDotClick = (clickedDot) => {
    setCurrentIndex(clickedDot);
  };
  return (
    <div className="home_container">
      <h1>Carousel</h1>
      <div className="carousel_wrapper">
        <Carousel CarouselItem={CarouselItem} currentIndex={currentIndex} />
        <div className="prev-next-buttons">
          <button className="prev" onClick={goBack}>
            <img src={Back} alt="prev-icon" />
          </button>
          <button className="next" onClick={goNext}>
            <img src={Next} alt="next-icon" />
          </button>
        </div>
        <div className="dots">
          <Dot
            CarouselItem={CarouselItem}
            currentIndex={currentIndex}
            onDotClick={(dotIndex) => onDotClick(dotIndex)}
          />
        </div>
      </div>
    </div>
  );
};
