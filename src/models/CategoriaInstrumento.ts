import { Instrumento } from "./Instrumento";

export interface CategoriaInstrumento {
  idCategoriaInstrumento: number;
  denominacion: string;
  instrumentos?: Instrumento[];
}
