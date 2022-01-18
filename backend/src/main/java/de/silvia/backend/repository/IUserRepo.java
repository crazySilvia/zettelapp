package de.silvia.backend.repository;

import de.silvia.backend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

//hier wird aus der Datenbank der User gesucht
@Repository
public interface IUserRepo extends MongoRepository<User, String> {

    Optional<User> findByUsername(String username);
}