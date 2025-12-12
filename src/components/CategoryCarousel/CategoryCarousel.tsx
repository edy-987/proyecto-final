import "./CategoryCarousel.css";

const categories = [
  {
    img: "/src/assets/img/productos3_6255.jpg",
    title: "CONSUMIBLES"
  },
  {
    img: "/src/assets/img/productos3_6437.jpg",
    title: "HERRAMIENTAS ELÉCTRICAS"
  },
  {
    img: "/src/assets/img/productos3_6520.jpg",
    title: "GENERADORES"
  },
  {
    img: "/src/assets/img/productos3_6522.jpg",
    title: "HERRAMIENTAS A BATERÍA"
  },
  {
    img: "/src/assets/img/productos3_6533.jpg",
    title: "HERRAMIENTAS A COMBUSTIÓN"
  },
  {
    img: "/src/assets/img/productos3_6538.jpg",
    title: "HERRAMIENTAS DE MANO"
  },
  {
    img: "/src/assets/img/productos3_6547.jpg",
    title: "HERRAMIENTAS DE JARDÍN"
  },
  {
    img: "/src/assets/img/productos3_7782.jpg",
    title: "ACCESORIOS"
  },
  {
    img: "/src/assets/img/productos3_7714.jpg",
    title: "AUTOMOTRIZ"
  }
];

const CategoryCarousel = () => {
  return (
    <div className="category-container">
      <div className="category-track">
        {categories.map((c, i) => (
          <div className="category-card" key={i}>
            <div className="category-img">
              <img src={c.img} alt={c.title} />
            </div>
            <p className="category-title">{c.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
