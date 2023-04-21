import React from "react";

const Dot = ({ CarouselItem, currentIndex, onDotClick }) => {
  return (
    <>
      {CarouselItem.map((content, dotIndex) => (
        <button
          key={dotIndex}
          onClick={() => onDotClick(dotIndex)}
          className={
            currentIndex === dotIndex ? "active-circle circle" : " circle"
          }
        ></button>
      ))}
    </>
  );
};

export default Dot;
