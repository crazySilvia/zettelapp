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
    buttonplus: (index: number) => void
    buttonminus: (index: number) => void
}

export default function Artikel(props:ArtikelProps){
    const {name, anzahl}=props.artikel
    return(
        <p>
            {name}{/* {props.id}*/}
            {anzahl}
            <button onClick={()=>props.buttonplus(props.index)}>+</button>
            <button onClick={()=>props.buttonminus(props.index)}>-</button>
            <button onClick={()=>props.button(props.index)}>löschen</button>
        </p>
    )
}