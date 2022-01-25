package de.silvia.backend.repository;

import de.silvia.backend.models.Artikel;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface IArtikelRepo extends MongoRepository<Artikel, String> {

    List<Artikel> findAll();

}
