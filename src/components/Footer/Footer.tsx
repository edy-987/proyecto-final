import { FaHandshake, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FaTag, FaAddressCard, FaAsterisk } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-column">
          <h3 className="footer-title"><FaHandshake /> Nosotros</h3>

          <div className="footer-item">
            <FaAddressCard />
            <span>Contacto</span>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-title"><FaTag /> Tienda</h3>

          <div className="footer-item">
            <FaEnvelope />
            <span>Destacados</span>
          </div>

          <div className="footer-item">
            <FaEnvelope />
            <span>Categorías</span>
          </div>

          <div className="footer-item">
            <FaAsterisk />
            <span>Nuevos</span>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-title footer-title-unete">Únete</h3>

          <div className="footer-social">
            <FaEnvelope />
            <FaInstagram />
            <FaFacebookF />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>¡Gracias por tu visita y regresa pronto!</p>
        <p>© Copyright 2025 ·</p>
      </div>

    </footer>
  );
};

export default Footer;
