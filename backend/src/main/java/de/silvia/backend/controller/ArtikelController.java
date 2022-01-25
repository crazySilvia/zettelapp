package de.silvia.backend.controller;

import de.silvia.backend.models.Artikel;
import de.silvia.backend.services.ArtikelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("api/artikel")
public class ArtikelController {

    private final ArtikelService aServ;

    @Autowired
    public ArtikelController(ArtikelService aServ) {
        this.aServ = aServ;
    }

    //*********** Methoden *********
    @GetMapping("/zettel")
    public List<Artikel> getAll() {return aServ.getAllArtikel();
    }
}