package de.silvia.backend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Artikel {
    @Id
    private String id;
    @NonNull private String name;
    private int anzahl;
}