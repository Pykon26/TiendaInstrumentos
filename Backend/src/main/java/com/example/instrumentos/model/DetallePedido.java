package com.example.instrumentos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "DetallePedido")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetallePedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDetallePedido;

    @ManyToOne
    @JoinColumn(name = "idPedido")
    @JsonIgnore
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "idInstrumento")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "detallesPedido", "historialPrecios"})
    private Instrumento instrumento;

    private Integer cantidad;
}