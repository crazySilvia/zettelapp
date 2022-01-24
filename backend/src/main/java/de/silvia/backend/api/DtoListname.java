package de.silvia.backend.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//data transfer obfekt kommt vom frontend geschickt
public class DtoListname {
    String listName;
}