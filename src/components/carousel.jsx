import React from "react";

const carousel = ({ CarouselItem, currentIndex }) => {
  return (
    <div className="carousel_img">
      <img src={CarouselItem[currentIndex].Image} />
    </div>
  );
};

export default carousel;
