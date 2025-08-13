"use client";

import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type CarouselProps = {
  slides: React.ReactNode[];  
  perView?: number; 
  spacing?: number;   
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?:string;
};

const Carousel: React.FC<CarouselProps> = ({
  slides,
  perView = 3,
  spacing = 15,
  autoplay = false,
  interval = 3000,
  showArrows = false,
  showDots = true,
  className,
}) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView, spacing },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 1, spacing } },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing },
      },
    },
  });

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, interval);
    return () => clearInterval(timer);
  }, [instanceRef, autoplay, interval]);

  return (
    <div className={` ${className}`}>
      {/* Slider container */}
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide">
            {slide}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            ◀
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            ▶
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div className="relative flex flex-col bottom-50 items-end left-3  gap-2 ">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className="w-3  relative  h-3 rounded-full bg-gray-300 hover:bg-gray-500 transition"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
