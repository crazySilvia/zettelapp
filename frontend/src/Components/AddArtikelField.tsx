import React from 'react';
import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface AddArtikelFieldProps {
    anzahl: number
    setAnzahl: Dispatch<SetStateAction<number>>
    artikel: string
    setArtikel: Dispatch<SetStateAction<string>>
}

export default function AddArtikelField({anzahl,setAnzahl,artikel,setArtikel} : AddArtikelFieldProps){

    const onArtikelChange: (event: ChangeEvent<HTMLInputElement>) => void =
        (event) => {
        setArtikel(event.target.value);
    }

    const onAnzahlChange: (event: ChangeEvent<HTMLInputElement>) => void =
        (event) => {
        setAnzahl(parseInt(event.target.value));
    }

    return(
        <form >
            <div className="addField_input">
                <input type="text" onChange={onArtikelChange} placeholder="Artikel" value={artikel}/>
            </div>
            <div className="addField_input">
                <input type="text" onChange={onAnzahlChange} placeholder="Anzahl" value={anzahl}/>
            </div>
            <div className="addField_button">
                <button type={"submit"}>Add</button>
            </div>
        </form>
)
}