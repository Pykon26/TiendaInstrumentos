import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InstrumentoDetalle.css";
import api from "../services/api";
import { Instrumento } from "../models/Instrumento";

const InstrumentoDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [instrumento, setInstrumento] = useState<Instrumento | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstrumento = async () => {
      try {
        const res = await api.get<Instrumento>(`/instrumentos/${id}`);
        setInstrumento(res.data);
      } catch (e) {
        setError("No se pudo cargar el instrumento");
      } finally {
        setLoading(false);
      }
    };
    fetchInstrumento();
  }, [id]);

  if (loading) return <div className="detalle-container">Cargando instrumento...</div>;
  if (error) return <div className="detalle-container">{error}</div>;
  if (!instrumento) return <div className="detalle-container">Instrumento no encontrado</div>;

  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <img src={`/img/${instrumento.imagen}`} alt={instrumento.denominacion} className="detalle-img" />
        <div className="detalle-info">
          <h2 className="detalle-title">{instrumento.denominacion}</h2>
          <p className="detalle-marca">
            {instrumento.marca}
            {instrumento.categoria && <> | {instrumento.categoria}</>}
          </p>
          <p className="detalle-precio">
            ${instrumento.precio !== undefined && instrumento.precio !== null
              ? instrumento.precio.toLocaleString()
              : ""}
          </p>
          <p className="detalle-desc">{instrumento.descripcion}</p>
          <button className="detalle-btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default InstrumentoDetalle;
