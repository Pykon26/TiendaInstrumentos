import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">Tienda de Instrumentos</h1>
        <p className="home-subtitle">Encontrá los mejores instrumentos al mejor precio</p>
        <button className="home-button">Explorar catálogo</button>
      </div>
    </div>
  );
};

export default Home;
