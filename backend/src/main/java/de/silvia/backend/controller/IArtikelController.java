package de.silvia.backend.controller;

import de.silvia.backend.models.Artikel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IArtikelController {


    //*********** Methoden *********
    @GetMapping()
    List<Artikel> getAll();

    @PostMapping(value = "addArtikel")
    List<Artikel> addArtikel(@RequestBody Artikel artikelToAdd);
}
