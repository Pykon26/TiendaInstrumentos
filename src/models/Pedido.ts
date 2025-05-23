import { Usuario } from "./Usuario";
import { DetallePedido } from "./DetallePedido";
import { EstadoPedido } from "./EstadoPedido";

export interface Pedido {
  idPedido: number;
  usuario: Usuario;
  fecha: string;
  detalles?: DetallePedido[];
  estados?: EstadoPedido[];
}
