import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">TiendaMusica</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Inicio</Link>
          {/* <Link to="/productos" className="navbar-link">Productos</Link> */}
          {/* Más links futuros */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
