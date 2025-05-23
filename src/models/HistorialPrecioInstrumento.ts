import { Instrumento } from "./Instrumento";

export interface HistorialPrecioInstrumento {
  id: number;
  instrumento: Instrumento;
  precio: number;
  fecha: string;
}
