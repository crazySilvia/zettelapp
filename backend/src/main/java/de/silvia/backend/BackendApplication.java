package de.silvia.backend;

import de.silvia.backend.models.Artikel;
import de.silvia.backend.repository.IArtikelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.repository.Repository;

@SpringBootApplication
//Java sagen, wo das Repo liegt
@EnableMongoRepositories(basePackageClasses = IArtikelRepo.class)
public class BackendApplication{

    public static void main(String[] args) {

        SpringApplication.run(BackendApplication.class, args);
    }



}

//@Autowired
//    IArtikelRepo repo;

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
//
//
//    }
