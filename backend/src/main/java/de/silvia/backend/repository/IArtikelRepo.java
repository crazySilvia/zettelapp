package de.silvia.backend.repository;

import de.silvia.backend.models.Artikel;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;



public interface IArtikelRepo extends MongoRepository<Artikel, String> {
    List<Artikel> findAll();
    Optional<Artikel> findById(String id);


}
