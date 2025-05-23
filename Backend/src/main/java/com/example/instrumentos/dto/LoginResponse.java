package com.example.instrumentos.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private Long id;
    private String nombreUsuario;
    private String rol;
    private String token; // Para JWT si se implementa en el futuro
    private boolean success;
    private String message;
}