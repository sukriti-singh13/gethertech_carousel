import React, { useEffect, useRef } from "react";

const Carousel = ({ CarouselItem, currentIndex }) => {
  const CurrentImageRef = useRef();

  useEffect(() => {
    CurrentImageRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [currentIndex]);

  return (
    <div className="carousal-images-wrapper">
      {CarouselItem.map((image, index) => (
        <img
          ref={index === currentIndex ? CurrentImageRef : null}
          src={image.Image}
        />
      ))}
    </div>
  );
};

export default Carousel;
