package de.silvia.backend.controller;

import de.silvia.backend.models.Artikel;
import de.silvia.backend.models.ArtikelListe;
import de.silvia.backend.repository.IArtikelRepo;
import de.silvia.backend.services.ArtikelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.expression.spel.ast.OpAnd;
import org.springframework.web.bind.annotation.*;

import java.security.InvalidParameterException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("api/zettel")  //({"${spring.datasource.url}"})
public class ArtikelController {

    private final ArtikelService aServ;

    @Autowired
    public ArtikelController(ArtikelService aServ) {

        this.aServ = aServ;
    }

    //*********** Methoden *********
    @GetMapping()
    public List<Artikel> getAll() {return aServ.getAllArtikel();
    }
    @PostMapping(value = "addArtikel")
    public List<Artikel> addArtikel(@RequestBody Artikel artikelToAdd) {
        return aServ.addArtikel(artikelToAdd);
    }



    @DeleteMapping("artikel/{id}")
    public List<Artikel> deleteArtikel(@PathVariable String id){
        return aServ.removeArtikel(id);
    }



}




//@PutMapping("lists/{itemKey}")
//    public List<ListItem> putIncreaseQuantity(@PathVariable String itemKey){
//        return listService.increaseQuantity(itemKey);
//    }
//
//    @PutMapping("lists/{itemKey}/decrease")
//    public List<ListItem> putDecreaseQuantity(@PathVariable String itemKey){
//        return listService.decreaseQuantity(itemKey);
//    }