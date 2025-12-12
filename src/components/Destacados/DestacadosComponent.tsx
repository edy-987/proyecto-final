import "./DestacadosComponent.css";
import { FaPlay } from "react-icons/fa";

const productos = [
  {
    img: "/src/assets/img/productos3_6437.jpg",
    name: "DISCO C/METAL AC.INOX 115x1.2x22.2 mm",
    price: "USD 0,47",
    code: "015-76102",
    tags: ["DESTACADO"],
    video: false
  },
  {
    img: "/src/assets/img/productos3_7731.jpg",
    name: "SET DESTORNILLADOR AISLADO 1000V 13 Pzs",
    price: "USD 34,62",
    code: "015-38016",
    tags: ["DESTACADO"],
    video: false
  },
  {
    img: "/src/assets/img/productos3_6547.jpg",
    name: "AMOLADORA DE BANCO 6”/150x16x12.7mm 150W",
    price: "USD 52,04",
    code: "015-79646",
    tags: ["DESTACADO"],
    video: false
  },
  {
    img: "/src/assets/img/productos3_7706.jpg",
    name: "TALADRO 10mm 20V 1 Bat./Carg.",
    price: "USD 77",
    code: "015-87213",
    tags: ["DESTACADO"],
    video: true
  },
  {
    img: "/src/assets/img/productos3_6520.jpg",
    name: "SET HERRAMIENTAS c/TALADRO 710W 13MM 95 Pzs",
    price: "USD 121,67",
    code: "015-79685",
    tags: ["DESTACADO"],
    video: false
  },
  {
    img: "/src/assets/img/productos3_6255.jpg",
    name: "AMOLADORA 230 mm 3000W",
    price: "USD 189,44",
    code: "015-79642",
    tags: ["DESTACADO"],
    video: false
  },
  {
    img: "/src/assets/img/productos3_7782.jpg",
    name: "GENERADOR INVERTER MONOFÁSICO 220V 1.8kW",
    price: "USD 919,33",
    code: "015-79985",
    tags: ["DESTACADO"],
    video: false
  },
  {
    img: "/src/assets/img/productos3_7718.jpg",
    name: "CARRO HERRAMIENTAS c/RUEDA COMPL.. 175 Pcs",
    price: "USD 1.130",
    code: "015-85410",
    tags: ["DESTACADO"],
    video: false
  }
];

const DestacadosComponent = () => {
  return (
    <section className="dest-container">

      <h1 className="dest-title">Destacados</h1>

      <div className="dest-layout">

        <div className="dest-banner-left">
          <img src="/src/assets/img/presentaciones0_4512.jpg" alt="" />
        </div>

        <div className="dest-right">

            <div className="dest-toolbar">
            <div className="dest-count-box">8</div>
            <span className="dest-order-label">Orden</span>

            <select className="dest-select">
                <option>Precio menor</option>
            </select>
            </div>

            <div className="dest-grid">
            {productos.map((p, i) => (
                <div className="dest-item" key={i}>

                {p.tags.map((t, index) => (
                    <span 
                    key={index}
                    className={`dest-tag ${t === "NUEVO" ? "tag-new" : ""}`}
                    >
                    {t}
                    </span>
                ))}

                <div className="dest-img-box">
                    <img src={p.img} alt={p.name} />
                    {p.video && (
                    <div className="dest-video-icon">
                        <FaPlay />
                    </div>
                    )}
                </div>

                <p className="dest-name">{p.name}</p>
                <p className="dest-price">{p.price}</p>
                <p className="dest-code">{p.code}</p>

                </div>
            ))}
            </div>
        </div>
      </div>

      <div className="dest-bottom-img">
        <img src="/src/assets/img/filename485.jpg" alt="" />
      </div>

    </section>
  );
};

export default DestacadosComponent;
