package de.silvia.backend.services;

import de.silvia.backend.models.Artikel;
import de.silvia.backend.repository.IArtikelRepo;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ArtikelService {

    private final IArtikelRepo artikelRepo;

    public ArtikelService(IArtikelRepo repo) {
        this.artikelRepo = repo;
    }

    //********* Methoden ********
    public List<Artikel> getAllArtikel() {
        return artikelRepo.findAll();
    }
}