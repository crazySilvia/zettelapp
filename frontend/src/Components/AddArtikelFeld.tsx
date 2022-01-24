import React from 'react';
import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface AddArtikelFeldProps {
    anzahl: number
    setAnzahl: Dispatch<SetStateAction<number>>
    artikel: string
    setArtikel: Dispatch<SetStateAction<string>>
}

export default function AddArtikelFeld({anzahl,setAnzahl,artikel,setArtikel} : AddArtikelFeldProps){

    const onItemChange: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
        setArtikel(event.target.value);
    }

    const onAmountChange: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
        setAnzahl(parseInt(event.target.value));
    }

    return(
        <form >
            <div className="addField_input">
                <input type="text" onChange={onItemChange} value={artikel}/>
            </div>
            <div className="addField_input">
                <input type="text" onChange={onAmountChange} value={anzahl}/>
            </div>
            <div className="addField_button">
                <button type={"submit"}>Add</button>
            </div>
        </form>
)
}