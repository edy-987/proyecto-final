import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";
import { FaHome, FaRegEye, FaFileAlt, FaBars } from "react-icons/fa";
import { RiStarLine } from "react-icons/ri";
import { LuSparkles } from "react-icons/lu";

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="menu-container">
        <NavLink to="/" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <FaHome className="menu-icon" />
          INICIO
        </NavLink>

        <NavLink to="/destacados" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <RiStarLine className="menu-icon" />
          DESTACADOS
        </NavLink>

        <NavLink to="/nuevos" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <LuSparkles className="menu-icon" />
          NUEVOS
        </NavLink>

        <NavLink to="/registro" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <FaRegEye className="menu-icon" />
          REGISTRA TU HERRAMIENTA
        </NavLink>

        <NavLink to="/contacto" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
          <FaFileAlt className="menu-icon" />
          CONTACTO
        </NavLink>
      </nav>

      <button className="menu-hamburger" onClick={() => setOpen(!open)}>
        <FaBars />
      </button>

      <div className={`menu-responsive ${open ? "open" : ""}`}>
        <NavLink to="/" className="menu-resp-item" onClick={() => setOpen(false)}>
          INICIO
        </NavLink>

        <NavLink to="/destacados" className="menu-resp-item" onClick={() => setOpen(false)}>
          DESTACADOS
        </NavLink>

        <NavLink to="/nuevos" className="menu-resp-item" onClick={() => setOpen(false)}>
          NUEVOS
        </NavLink>

        <NavLink to="/registro" className="menu-resp-item" onClick={() => setOpen(false)}>
          REGISTRA TU HERRAMIENTA
        </NavLink>

        <NavLink to="/contacto" className="menu-resp-item" onClick={() => setOpen(false)}>
          CONTACTO
        </NavLink>
      </div>
    </>
  );
};

export default MenuBar;
