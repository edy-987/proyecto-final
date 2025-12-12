import "./PromoBanners.css";

const banners = [
  "/src/assets/img/filename476.jpg",
  "/src/assets/img/filename510.jpg",
  "/src/assets/img/filename479.jpg"
];

const PromoBanners = () => {
  return (
    <div className="promo-container">
      {banners.map((src, index) => (
        <div className="promo-item" key={index}>
          <img src={src} alt={`promo-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default PromoBanners;
