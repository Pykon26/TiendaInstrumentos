package com.example.instrumentos.controller;

import com.example.instrumentos.model.Instrumento;
import com.example.instrumentos.service.InstrumentoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.instrumentos.dto.InstrumentoRequest;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/instrumentos")
@RequiredArgsConstructor
@Slf4j
public class InstrumentoController {

    private final InstrumentoService instrumentoService;

//    @GetMapping
//    public ResponseEntity<List<Instrumento>> getAllInstrumentos(
//            @RequestParam(required = false) Long idCategoria) {
//
//        List<Instrumento> instrumentos;
//        if (idCategoria != null) {
//            instrumentos = instrumentoService.findByCategoria(idCategoria);
//        } else {
//            instrumentos = instrumentoService.findAll();
//        }
//
//        return ResponseEntity.ok(instrumentos);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Instrumento> getInstrumentoById(@PathVariable Long id) {
//        return instrumentoService.findById(id)
//                .map(ResponseEntity::ok)
//                .orElse(ResponseEntity.notFound().build());
//    }

    @GetMapping
    public ResponseEntity<List<InstrumentoRequest>> getAllInstrumentos(@RequestParam(required = false) Long idCategoria) {
        List<Instrumento> instrumentos = (idCategoria != null)
                ? instrumentoService.findByCategoria(idCategoria)
                : instrumentoService.findAll();

        List<InstrumentoRequest> dtos = instrumentos.stream()
                .map(instrumentoService::toInstrumentoRequest) // <--- ACA!
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InstrumentoRequest> getInstrumentoById(@PathVariable Long id) {
        return instrumentoService.findById(id)
                .map(instrumentoService::toInstrumentoRequest) // <--- ACA!
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }



    @PostMapping
    public ResponseEntity<?> createInstrumento(@RequestBody Instrumento instrumento) {
        try {
            return new ResponseEntity<>(instrumentoService.save(instrumento), HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateInstrumento(@PathVariable Long id, @RequestBody Instrumento instrumento) {
        try {
            log.info("Actualizando instrumento con ID: {}", id);

            return instrumentoService.findById(id)
                    .map(existingInstrumento -> {
                        instrumento.setIdInstrumento(id);
                        Instrumento updated = instrumentoService.save(instrumento);
                        log.info("Instrumento actualizado correctamente: {}", updated);
                        return ResponseEntity.ok(updated);
                    })
                    .orElseGet(() -> {
                        log.error("Instrumento no encontrado con ID: {}", id);
                        return ResponseEntity.notFound().build();
                    });
        } catch (Exception e) {
            log.error("Error al actualizar instrumento: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteInstrumento(@PathVariable Long id) {
        try {
            instrumentoService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Endpoint adicional para actualizar precio
    @PatchMapping("/{id}/precio")
    public ResponseEntity<?> updatePrecio(@PathVariable Long id, @RequestBody Map<String, Double> body) {
        try {
            Double nuevoPrecio = body.get("precio");
            if (nuevoPrecio == null || nuevoPrecio <= 0) {
                return ResponseEntity.badRequest().body(Map.of("error", "Precio inválido"));
            }

            Instrumento actualizado = instrumentoService.actualizarPrecio(id, nuevoPrecio);
            return ResponseEntity.ok(actualizado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    // Endpoint adicional para reponer stock
    @PatchMapping("/{id}/stock")
    public ResponseEntity<?> updateStock(@PathVariable Long id, @RequestBody Map<String, Integer> body) {
        try {
            Integer cantidad = body.get("cantidad");
            if (cantidad == null || cantidad <= 0) {
                return ResponseEntity.badRequest().body(Map.of("error", "Cantidad inválida"));
            }

            Instrumento actualizado = instrumentoService.reponerStock(id, cantidad);
            return ResponseEntity.ok(actualizado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}