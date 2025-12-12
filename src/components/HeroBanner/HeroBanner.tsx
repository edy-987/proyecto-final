import { useState, useEffect, useRef } from "react";
import "./HeroBanner.css";

const images = [
  "/src/assets/img/presentaciones0_8071.jpg",
  "/src/assets/img/presentaciones0_4512.jpg",
  "/src/assets/img/presentaciones0_4521.jpg",
  "/src/assets/img/presentaciones0_4514.jpg",
  "/src/assets/img/presentaciones0_8064.jpg",
  "/src/assets/img/presentaciones0_8065.jpg",
  "/src/assets/img/presentaciones0_8067.jpg"
];

const extendedImages = [
  images[images.length - 1],
  ...images,
  images[0] 
];

const HeroBanner = () => {
  const [index, setIndex] = useState(1);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleSlides(1);
      else setVisibleSlides(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;

    if (index === extendedImages.length - 1) {
      setTimeout(() => {
        trackRef.current!.style.transition = "none";
        setIndex(1);
      }, 600);

      trackRef.current.style.transition = "transform 0.6s ease";
    }

    if (index === 0) {
      setTimeout(() => {
        trackRef.current!.style.transition = "none";
        setIndex(images.length);
      }, 600);

      trackRef.current.style.transition = "transform 0.6s ease";
    }
  }, [index]);

  return (
    <div className="hero-banner">

      <button className="arrow arrow-left" onClick={prev}>
        &#10094;
      </button>

      <div className="slider-window">
        <div
          ref={trackRef}
          className="slider-track"
          style={{
            transform: `translateX(-${index * (100 / visibleSlides)}%)`
          }}
        >
          {extendedImages.map((src, i) => (
            <div
              className="slide"
              key={i}
              style={{ minWidth: `${100 / visibleSlides}%` }}
            >
              <img src={src} alt={`banner-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow arrow-right" onClick={next}>
        &#10095;
      </button>

    </div>
  );
};

export default HeroBanner;
