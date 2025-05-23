import { Usuario } from "./Usuario";

export interface Rol {
  idRol: number;
  definicion: string;
  usuarios?: Usuario[];
}
