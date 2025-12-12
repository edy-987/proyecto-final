import { useState, useEffect, useRef } from "react";
import "./NewProducts.css";
import { FaBan } from "react-icons/fa";

const products = [
  {
    img: "/src/assets/img/productos3_6255.jpg",
    name: "SET DE 26 LLAVES COMBINADAS TOLSEN",
    code: "015-15884",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_6567.jpg",
    name: "CUCHILLO DESMONTAJE AISLADO TOLSEN",
    code: "015-51416",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_6520.jpg",
    name: "MEZCLADOR DE PINTURA TOLSEN 140x600 mm",
    code: "015-40104",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_7782.jpg",
    name: "SET TOLSEN 13 DESTORNILLADORES CON AISLAMIENTO VDE",
    code: "015-38017",
    agotado: true
  }
];

const extended = [
  ...products.slice(-4),
  ...products,
  ...products.slice(0, 4)
];

const NewProducts = () => {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(4);
  const trackRef = useRef<HTMLDivElement>(null);

  // RESPONSIVE
  useEffect(() => {
    const update = () => {
      setVisible(window.innerWidth < 768 ? 1 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => next(), 3000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((i) => i + 1);
  };

  const prev = () => {
    setIndex((i) => i - 1);
  };

  useEffect(() => {
    if (!trackRef.current) return;

    const total = extended.length;

    if (index === total - visible) {
      setTimeout(() => {
        trackRef.current!.style.transition = "none";
        setIndex(visible);
      }, 500);

      trackRef.current.style.transition = "transform 0.5s ease";
    }

    if (index === 0) {
      setTimeout(() => {
        trackRef.current!.style.transition = "none";
        setIndex(total - visible * 2);
      }, 500);

      trackRef.current.style.transition = "transform 0.5s ease";
    }
  }, [index]);

  return (
    <div className="np-container">

      <div className="np-header">
        <span className="np-arrow-icon">❯</span> Nuevos Productos
      </div>

      <button className="np-btn np-left" onClick={prev}>❮</button>

      <div className="np-window">
        <div
          ref={trackRef}
          className="np-track"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`
          }}
        >
          {extended.map((p, i) => (
            <div className="np-item" key={i} style={{ minWidth: `${100 / visible}%` }}>
              {p.agotado && <span className="np-agotado">
                <FaBan className="np-ban-icon" /> AGOTADO
                </span>}
              <img src={p.img} alt={p.name} />
              <p className="np-name">{p.name}</p>
              <p className="np-code">{p.code}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="np-btn np-right" onClick={next}>❯</button>

    </div>
  );
};
export default NewProducts;
