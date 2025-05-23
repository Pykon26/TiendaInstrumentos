package com.example.instrumentos.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegistroRequest {
    private String nombreUsuario; // En este caso será el email
    private String clave;
    private String rol; // "Admin", "Operador", o "Visor"
}