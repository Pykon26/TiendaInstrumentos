import { CategoriaInstrumento } from "./CategoriaInstrumento";
import { DetallePedido } from "./DetallePedido";
import { HistorialPrecioInstrumento } from "./HistorialPrecioInstrumento";

export interface Instrumento {
  idInstrumento: number;
  codigo: string;
  denominacion: string;
  marca: string;
  stock: number;
  descripcion: string;
  imagen: string;
  idCategoriaInstrumento: number;
  categoria?: string; // el nombre de la categoría, puede venir o no
  precio: number;     // el precio actual del instrumento
}
