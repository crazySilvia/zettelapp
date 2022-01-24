package de.silvia.backend.controller;

import de.silvia.backend.api.DtoListname;
import de.silvia.backend.models.ArtikelListe;
import de.silvia.backend.services.ArtikelListService;
import de.silvia.backend.services.ArtikelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.security.InvalidParameterException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

public class ArtikelListController {

    private final ArtikelListService LiServ;

    @Autowired
    public ArtikelListController(ArtikelListService LiServ) {
        this.LiServ = LiServ;
    }

    @GetMapping()
    public List<ArtikelListe> getAllLists(){
        return LiServ.getAll();
    }

    @PostMapping()
    public ArtikelListe postNewList(@RequestBody DtoListname listName){
        Optional<ArtikelListe> optionalArtikelListe = LiServ.saveNewList(listName.getListName());
        return optionalArtikelListe.orElseThrow(() -> new InvalidParameterException("Liste mit Name: "
                + listName.getListName() + " gibt es schon!"));
    }

    @GetMapping("/{whichList}")
    public ArtikelListe getListByName(@PathVariable String wichList){
        Optional<ArtikelListe> optionalArtikelListe = LiServ.findbyName(wichList);
        return optionalArtikelListe.orElseThrow(() -> new NoSuchElementException("Liste mit Namen: " +
                wichList+" nicht gefunden"));
    }
}