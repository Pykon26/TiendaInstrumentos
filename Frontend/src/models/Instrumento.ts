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
  categoria: CategoriaInstrumento;
  detalles?: DetallePedido[];
  historialPrecios?: HistorialPrecioInstrumento[];
}
