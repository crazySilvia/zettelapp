package de.silvia.backend.repository;

import de.silvia.backend.models.ArtikelListe;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface IArtikelListRepo extends MongoRepository<ArtikelListe, String> {

    List<ArtikelListe> findAll();


    Optional<ArtikelListe> findByListName(String listName);


}