package de.silvia.backend.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import java.util.HashMap;

@NoArgsConstructor
@Data
@Builder
@AllArgsConstructor
public class ArtikelListe {
    @Id
    String listName;
    HashMap<String,Artikel> artikel;
}