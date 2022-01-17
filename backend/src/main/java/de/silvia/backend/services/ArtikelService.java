package de.silvia.backend.services;

import de.silvia.backend.models.Artikel;
import de.silvia.backend.repository.IArtikelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ArtikelService {

    @Autowired
    public IArtikelRepo repo;

    //********* Methoden ********
    public List<Artikel> getAllArtikel() {
        return repo.findAll();
    }

    public List<Artikel> addArtikel(Artikel artikelToAdd) {
        if (repo.findById(artikelToAdd.getId()).isPresent()) {
            //hier Anzahl erhöhen
            return getAllArtikel();
        }
        repo.save(Artikel.builder().name(artikelToAdd.getName()).build());

        return getAllArtikel();
    }

   // // public List<Artikel> removeArtikel(String itemKey) {
    //        repo.deleteById(itemKey);
    //        return getAllArtikel();
    //    }

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