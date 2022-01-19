package de.silvia.backend;

import de.silvia.backend.security.models.User;
import de.silvia.backend.repository.IArtikelRepo;
import de.silvia.backend.security.repository.IUserRepo;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.List;

@SpringBootApplication
//Java sagen, wo das Repo liegt
@EnableMongoRepositories//(basePackageClasses = IArtikelRepo.class)
public class BackendApplication implements CommandLineRunner {
    private static final Log LOG = LogFactory.getLog(BackendApplication.class);

    public static void main(String[] args) {

        SpringApplication.run(BackendApplication.class, args);
    }

    @Autowired
    IUserRepo userRepo;

    @Autowired
    PasswordEncoder encoder;

    @Override
    public void run(String... args) throws Exception {
        final String encodedPassword = encoder.encode("1379");
        final User user = User.newUser("Roberta", encodedPassword, List.of(new SimpleGrantedAuthority("API_RRAEDWRITE")));
        try {
            userRepo.insert(user);
        } catch (Exception e){
            LOG.info("User " + user.getUsername() + " already exists.");
        }
    }
}

// Notizen zum Probieren:
//@Override
//    public void run(String... run) {
//        repo.save(Artikel.builder().name("Hundekuchen").build());
//        repo.findAll().forEach(System.out::println);
//    }


// @Bean
//    CommandLineRunner runner(IArtikelRepo repo){
//        return args -> {
//            repo.save(Artikel.builder().name("Marmelade").build());
//        };
//
//    }

//implements CommandLineRunner

//IArtikelRepo repo;
//
//    @Override
//    public void run(String... run) {
//        final Artikel essen = Artikel.builder().name("Kuchen").build();
//        repo.save(essen);
//
//        repo.save(Artikel.builder().name("Marmelade").build());
//        repo.findAll().forEach(System.out::println);
//    }
