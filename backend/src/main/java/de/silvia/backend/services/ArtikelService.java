package de.silvia.backend.services;

import de.silvia.backend.models.Artikel;
import de.silvia.backend.repository.IArtikelRepo;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ArtikelService {

    private final IArtikelRepo repo;

    public ArtikelService(IArtikelRepo repo) {
        this.repo = repo;
    }

    //********* Methoden ********
    public List<Artikel> getAllArtikel() {
        return repo.findAll();
    }

    public List<Artikel> addArtikel(Artikel artikelToAdd) {
        /*if (repo.findArtikelByName(artikelToAdd.getName()).isPresent()) {
            //ToDo hier Anzahl erhöhen
            artikelToAdd.setAnzahl(artikelToAdd.getAnzahl()+1);

            return getAllArtikel();
        }*/
        repo.save(Artikel.builder().name(artikelToAdd.getName()).build());
        return getAllArtikel();
    }

    public List<Artikel> removeArtikel(String id) {
        repo.removeArtikelById(id);
        return getAllArtikel();
    }




}


//    public List<Artikel> increaseQuantity(String itemKey) {
//        Artikel itemToIncrease = repo.findById(itemKey).get();
//        itemToIncrease.setQuantity(itemToIncrease.getQuantity()+1);
//        repo.save(itemToIncrease);
//        return getAllArtikel();
//    }
//
//    public List<Artikel> decreaseQuantity(String itemKey) {
//        Artikel itemToDecrease = repo.findById(itemKey).get();
//        if(itemToDecrease.getQuantity()<=1){
//            return removeArtikel(itemKey);
//        }
//        itemToDecrease.setQuantity(itemToDecrease.getQuantity()-1);
//        return getAllArtikel();
//    }