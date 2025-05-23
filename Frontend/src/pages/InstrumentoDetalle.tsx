import React from "react";
import "./InstrumentoDetalle.css";

const instrumentoMock = {
  idInstrumento: 1,
  codigo: "GTR123",
  denominacion: "Guitarra Fender Stratocaster",
  marca: "Fender",
  stock: 5,
  descripcion: "Guitarra eléctrica con cuerpo de aliso, mástil de arce y sonido legendario.",
  imagen: "https://images.unsplash.com/photo-1511376777868-611b54f68947", // puedes reemplazarlo
  precio: 249900,
  categoria: {
    idCategoriaInstrumento: 1,
    denominacion: "Cuerdas"
  }
};

const InstrumentoDetalle: React.FC = () => {
  const instrumento = instrumentoMock;

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <img src={instrumento.imagen} alt={instrumento.denominacion} className="detalle-img" />
        <div className="detalle-info">
          <h2 className="detalle-title">{instrumento.denominacion}</h2>
          <p className="detalle-marca">{instrumento.marca} | {instrumento.categoria.denominacion}</p>
          <p className="detalle-precio">${instrumento.precio.toLocaleString()}</p>
          <p className="detalle-desc">{instrumento.descripcion}</p>
          <button className="detalle-btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default InstrumentoDetalle;
