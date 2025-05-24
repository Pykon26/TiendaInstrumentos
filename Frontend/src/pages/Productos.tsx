import React from "react";
import "./Productos.css";
import { Instrumento } from "../models/Instrumento";
import { Link } from "react-router-dom";

// 🔁 Simulamos datos por ahora
const productosMock: Instrumento[] = [
  {
    idInstrumento: 1,
    codigo: "GTR123",
    denominacion: "Guitarra Fender Stratocaster",
    marca: "Fender",
    stock: 5,
    descripcion: "Guitarra eléctrica clásica con excelente sonido.",
    imagen: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    categoria: { idCategoriaInstrumento: 1, denominacion: "Cuerdas" },
    historialPrecios: [],
    detalles: [],
  },
  {
    idInstrumento: 2,
    codigo: "DRM456",
    denominacion: "Batería Pearl Export",
    marca: "Pearl",
    stock: 2,
    descripcion: "Set completo de batería acústica.",
    imagen: "https://images.unsplash.com/photo-1519340333755-5061d6d81d72",
    categoria: { idCategoriaInstrumento: 2, denominacion: "Percusión" },
    historialPrecios: [],
    detalles: [],
  }
];

const Productos: React.FC = () => {
  return (
    <div className="productos-container">
      <h2>Catálogo de Instrumentos</h2>
      <div className="productos-grid">
        {productosMock.map(producto => (
          <div className="producto-card" key={producto.idInstrumento}>
            <img src={producto.imagen} alt={producto.denominacion} />
            <h3>{producto.denominacion}</h3>
            <p className="precio">${producto.historialPrecios?.[0]?.precio?.toLocaleString() || 'Consultar'}</p>
            <p className="marca">{producto.marca}</p>
            <Link to={`/instrumento/${producto.idInstrumento}`} className="ver-detalle">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
