import React from "react";
export interface IArtikel {
    name: string;
    anzahl?: number;
}

interface ArtikelProps{
    buttondel: (index: number) => void
    index: number
    artikel: IArtikel
    buttonplus: (index: number) => void
    buttonminus: (index: number) => void
}

export default function Artikel(props:ArtikelProps){
    const {name, anzahl}=props.artikel
    return(
        <p>
            {name}
            {anzahl}
            <button onClick={()=>props.buttonplus(props.index)}>+</button>
            <button onClick={()=>props.buttonminus(props.index)}>-</button>
            <button onClick={()=>props.buttondel(props.index)}>löschen</button>

        </p>
    )
}