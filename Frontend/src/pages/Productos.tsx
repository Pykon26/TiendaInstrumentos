import React, { useEffect, useState } from "react";
import { Instrumento } from "../models/Instrumento";
import { getProductos } from "../services/productService";
import "./Productos.css";
// Si usas react-router-dom para detalle:
// import { Link } from "react-router-dom";

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Instrumento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err: any) {
        setError("No se pudieron cargar los productos");
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  if (loading) return <div className="productos-container">Cargando productos...</div>;
  if (error) return <div className="productos-container">{error}</div>;

  return (
    <div className="productos-container">
      <h2>Instrumentos disponibles</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.idInstrumento} className="producto-card">
            <h3>{producto.denominacion}</h3>
            <img
              src={`/img/${producto.imagen}`}
              alt={producto.denominacion}
              loading="lazy"
            />
            <div className="descripcion">{producto.descripcion}</div>
            <div className="marca">{producto.marca}</div>
            {/* <div className="categoria">{producto.categoria?.denominacion}</div> */}
            {/* Si quieres agregar link a detalle, descomenta y ajusta la ruta */}
            {/* <Link className="ver-detalle" to={`/instrumentos/${producto.idInstrumento}`}>Ver detalle</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
