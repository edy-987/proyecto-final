import "./NuevosComponent.css";
import { FaBan } from "react-icons/fa";

const products = [
  {
    img: "/src/assets/img/productos3_7749.jpg",
    name: "CARRO DE HERRAMIENTAS TOLSEN C/ RUEDAS 239 PIEZAS",
    code: "015-85416",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_7782.jpg",
    name: "ADAPTADOR USB-A DE IONES DE LITIO TOLSEN",
    code: "015-25708",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_7714.jpg",
    name: "SET TOLSEN DE HERRAMIENTAS DE ELECTRICISTA 66 PZS",
    code: "015-85120",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_6547.jpg",
    name: "SET TOLSEN DE HERRAMIENTAS DE ELECTRICISTA",
    code: "015-85255",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_7731.jpg",
    name: "SET TOLSEN DE 7 PZS AISLADA POR INYECCIÓN",
    code: "015-88007",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_6538.jpg",
    name: "TALADRO DE ÁNGULO RECTO 1/4'' TOLSEN",
    code: "015-77667",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_7718.jpg",
    name: "RUEDA NEUMÁTICA TOLSEN 16'' x 4.8''",
    code: "015-62035",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_6255.jpg",
    name: "RUEDA NEUMÁTICA TOLSEN 10'' x 3,50''-4",
    code: "015-64011",
    agotado: true
  },
    {
    img: "/src/assets/img/productos3_6437.jpg",
    name: "SET TOLSEN DE 7 PZS AISLADA POR INYECCIÓN",
    code: "015-88007",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_6520.jpg",
    name: "TALADRO DE ÁNGULO RECTO 1/4'' TOLSEN",
    code: "015-77667",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_7706.jpg",
    name: "RUEDA NEUMÁTICA TOLSEN 16'' x 4.8''",
    code: "015-62035",
    agotado: true
  },
  {
    img: "/src/assets/img/productos3_6522.jpg",
    name: "RUEDA NEUMÁTICA TOLSEN 10'' x 3,50''-4",
    code: "015-64011",
    agotado: true
  }
];

const NuevosComponent = () => {
  return (
    <section className="nuevos-wrapper">
      <div className="nuevos-inner">
        <div className="nuevos-header">
          <span className="nuevos-chevron">❯</span>
          <span>Nuevos Productos</span>
        </div>

        <div className="nuevos-toolbar">
          <div className="nuevos-count">
            <span className="nuevos-count-number">77</span>
          </div>

          <div className="nuevos-order">
            <span className="nuevos-order-label">Orden</span>
            <select className="nuevos-select">
              <option>Precio menor</option>
              <option>Precio mayor</option>
              <option>Nombre A-Z</option>
              <option>Nombre Z-A</option>
            </select>
          </div>
        </div>

        <div className="nuevos-grid">
          {products.map((p, i) => (
            <article className="nuevos-item" key={i}>
              {p.agotado && (
                <span className="nuevos-agotado">
                  <FaBan className="nuevos-agotado-icon"/>
                  AGOTADO
                </span>
              )}

              <div className="nuevos-img-box">
                <img src={p.img} alt={p.name} />
              </div>

              <h3 className="nuevos-name">{p.name}</h3>
              <p className="nuevos-code">{p.code}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


export default NuevosComponent;
