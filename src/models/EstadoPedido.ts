import { Pedido } from "./Pedido";

export interface EstadoPedido {
  idEstadoPedido: number;
  estado: string;
  fecha: string;
  pedido: Pedido;
}
