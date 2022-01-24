package de.silvia.backend.services;

import de.silvia.backend.models.ArtikelListe;
import de.silvia.backend.repository.IArtikelListRepo;
import java.util.List;
import java.util.Optional;

public class ArtikelListService {

    private final IArtikelListRepo listRepo;

    public ArtikelListService(IArtikelListRepo repo) {
        this.listRepo = repo;
    }
    //********* Methoden ********
    public List<ArtikelListe> getAll() {
        return listRepo.findAll();
    }

    public Optional<ArtikelListe> saveNewList(String listName) {
        if (listRepo.findByListName(listName).isEmpty()){
            return Optional.of(listRepo.save(ArtikelListe.builder().listName(listName).build()));
        }
        return Optional.empty();
    }

    public Optional<ArtikelListe> findbyName(String listName) {
        return listRepo.findByListName(listName);
    }
}
