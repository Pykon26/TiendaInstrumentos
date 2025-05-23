import { Pedido } from "./Pedido";
import { Instrumento } from "./Instrumento";

export interface DetallePedido {
  idDetallePedido: number;
  pedido: Pedido;
  instrumento: Instrumento;
  cantidad: number;
}
