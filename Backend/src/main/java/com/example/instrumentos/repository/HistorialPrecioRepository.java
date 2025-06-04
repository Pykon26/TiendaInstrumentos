package com.example.instrumentos.repository;

import com.example.instrumentos.model.HistorialPrecioInstrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistorialPrecioRepository extends JpaRepository<HistorialPrecioInstrumento, Long> {
    List<HistorialPrecioInstrumento> findByInstrumento_IdInstrumentoOrderByFechaDesc(Long idInstrumento);

    HistorialPrecioInstrumento findTopByInstrumento_IdInstrumentoOrderByFechaDesc(Long idInstrumento);


}


