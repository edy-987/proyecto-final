import "./Recommended.css";

const products = [
  {
    img: "/src/assets/img/productos3_6437.jpg",
    name: "GATO CARRO (IND.) 2 TON. 8.5Kg",
    price: "USD 74,40",
    code: "015-65462",
  },
  {
    img: "/src/assets/img/productos3_6522.jpg",
    name: "AMOLADORA 125 mm 1200W VELOC.REGULABLE",
    price: "USD 83,56",
    code: "015-79527",
  },
  {
    img: "/src/assets/img/productos3_6538.jpg",
    name: "AMOLADORA 125 mm 950W 9.500 rpm IND.",
    price: "USD 65,48",
    code: "015-88580",
  },
  {
    img: "/src/assets/img/productos3_6547.jpg",
    name: "CARRO HERRAMIENTAS CRUEDA COMPL. 175 Pcs",
    price: "USD 1.130",
    code: "015-85410",
  }
];

const Recommended = () => {
  return (
    <div className="rec-container">

      <div className="rec-header">
        <span className="rec-icon">≣</span> Recomendados
      </div>

      <div className="rec-grid">
        {products.map((p, i) => (
          <div className="rec-item" key={i}>
            <div className="rec-img-box">
              <img src={p.img} alt={p.name} />
            </div>

            <p className="rec-name">{p.name}</p>
            <p className="rec-price">{p.price}</p>
            <p className="rec-code">{p.code}</p>
          </div>
        ))}
      </div>

      <h2 className="rec-subtitle">
        HERRAMIENTAS MANUALES, ELÉCTRICAS A BATERÍA, COMBUSTIÓN
      </h2>

    </div>
  );
};

export default Recommended;
