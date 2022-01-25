package de.silvia.backend.models;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Artikel {
    @NonNull private String name;
    private int anzahl;
}