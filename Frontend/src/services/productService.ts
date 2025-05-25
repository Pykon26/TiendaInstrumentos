import api from "./api";
import { Instrumento } from "../models/Instrumento";

export const getProductos = async (): Promise<Instrumento[]> => {
  const response = await api.get<Instrumento[]>("/instrumentos");
  return response.data;
};
