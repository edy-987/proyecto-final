import "./Header.css";
import { FaEnvelope, FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-topbar">
      <div className="header-icons">
        <FaEnvelope />
        <FaInstagram />
        <FaFacebookF />
        <FaTiktok />
        <FaYoutube />
      </div>
    </div>
  );
};

export default Header;
