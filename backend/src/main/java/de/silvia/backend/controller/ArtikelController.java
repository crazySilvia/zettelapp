package de.silvia.backend.controller;

import de.silvia.backend.models.Artikel;
import de.silvia.backend.repository.IArtikelRepo;
import de.silvia.backend.services.ArtikelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/zettel")  //({"${spring.datasource.url}"})
public class ArtikelController implements IArtikelController {

    private final ArtikelService aServ;

    @Autowired
    public ArtikelController(ArtikelService aServ) {

        this.aServ = aServ;
    }


    @Bean
    CommandLineRunner runner(IArtikelRepo repo){
        return args -> {
            repo.save(Artikel.builder().name("Kuchen").build());
        };

    }

    //*********** Methoden *********
    @Override
    @GetMapping()
        public List<Artikel> getAll() {return aServ.getAllArtikel();
        }
    @Override
    @PostMapping(value = "addArtikel")
    public List<Artikel> addArtikel(@RequestBody Artikel artikelToAdd) {
        return aServ.addArtikel(artikelToAdd);
    }
}
   //  @DeleteMapping("artikel")
    //    public List<Artikel> deleteItem(@PathVariable String itemKey){
    //        return aServ.removeArtikel(itemKey);
    //    }





//@PutMapping("lists/{itemKey}")
//    public List<ListItem> putIncreaseQuantity(@PathVariable String itemKey){
//        return listService.increaseQuantity(itemKey);
//    }
//
//    @PutMapping("lists/{itemKey}/decrease")
//    public List<ListItem> putDecreaseQuantity(@PathVariable String itemKey){
//        return listService.decreaseQuantity(itemKey);
//    }