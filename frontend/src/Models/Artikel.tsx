import React from "react";
export interface IArtikel {
    id?: string;
    name: string;
    anzahl?: number; //todo noch implementieren
}

interface ArtikelProps{
    button: (item: number) => void
    index: number
    artikel: IArtikel
}

export default function Artikel(props:ArtikelProps){
    const {name, anzahl}=props.artikel
    return(
        <p>
            {name}{anzahl}{/* {props.id}*/}
            <button onClick={()=>props.button(props.index)}>löschen</button>
        </p>
    )
}