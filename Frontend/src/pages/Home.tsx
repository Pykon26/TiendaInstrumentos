import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">Tienda de Instrumentos</h1>
        <p className="home-subtitle">Encontrá los mejores instrumentos al mejor precio</p>
          <Link className="ver-detalle" to={`/productos`}>
              Explorar catálogo
            </Link>
      </div>
    </div>
  );
};

export default Home;
