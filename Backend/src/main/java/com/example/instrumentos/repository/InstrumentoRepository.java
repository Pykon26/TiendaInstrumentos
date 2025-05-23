package com.example.instrumentos.repository;

import com.example.instrumentos.model.Instrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InstrumentoRepository extends JpaRepository<Instrumento, Long> {
    List<Instrumento> findByCategoriaInstrumento_IdCategoriaInstrumento(Long idCategoria);
    Optional<Instrumento> findByCodigo(String codigo);
    boolean existsByCodigo(String codigo);

    @Query("SELECT i FROM Instrumento i LEFT JOIN FETCH i.historialPrecios WHERE i.idInstrumento = :id")
    Optional<Instrumento> findByIdWithHistorialPrecios(@Param("id") Long id);
}