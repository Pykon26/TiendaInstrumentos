package com.example.instrumentos.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InstrumentoDTO {
    private Long idInstrumento;
    private String codigo;
    private String denominacion;
    private String marca;
    private Integer stock;
    private String descripcion;
    private String imagen;
    private Long idCategoriaInstrumento;
    private String categoria;   // nombre de la categoría (opcional)
    private Double precio;      // precio actual
}
