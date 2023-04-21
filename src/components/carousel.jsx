import React from "react";

const Carousel = ({ CarouselItem, currentIndex }) => {
  return (
    <div className="carousel_img">
      <img src={CarouselItem[currentIndex].Image} />
    </div>
  );
};

export default Carousel;
