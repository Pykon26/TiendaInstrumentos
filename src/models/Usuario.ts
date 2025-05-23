import { Rol } from "./Rol";
import { Pedido } from "./Pedido";

export interface Usuario {
  idUsuario: number;
  nombre: string;
  apellido: string;
  email: string;
  contrasena: string;
  rol: Rol;
  pedidos?: Pedido[];
}
