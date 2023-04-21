import React, { useState } from "react";
import Tech1 from "../assets/tech1.avif";
import Tech2 from "../assets/tech2.avif";
import Tech3 from "../assets/tech3.avif";
import Tech4 from "../assets/tech4.avif";
import Tech5 from "../assets/tech5.avif";
import Tech6 from "../assets/tech6.avif";
import Tech7 from "../assets/tech7.avif";
import Tech8 from "../assets/tech8.avif";

import Carousel from "../components/carousel";
export const Home = () => {
  const CarouselItem = [
    { Image: Tech1 },
    { Image: Tech2 },
    { Image: Tech3 },
    { Image: Tech4 },
    { Image: Tech5 },
    { Image: Tech6 },
    { Image: Tech7 },
    { Image: Tech8 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="home_container">
      <h1>Carousel</h1>
      <div className="carousel_wrapper">
        <Carousel CarouselItem={CarouselItem} currentIndex={currentIndex} />
      </div>
    </div>
  );
};
