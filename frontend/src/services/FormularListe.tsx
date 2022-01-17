import React, {ChangeEventHandler, FormEventHandler, useState} from "react";
import {IArtikel} from "../Models/Artikel";

interface FormularListProps{
    updateList: (updatedArtikel: IArtikel ) => void
}

export function FormularListe(props:FormularListProps) {
    //sagt, dass value veränderbar ist
    const [value, setValue] = useState<string>('');

    //nimmt die Eingabe und setzt diese auf value
    const handleChange:ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.currentTarget.value);
    };

    //bei Klick auf erstellen mache Folgendes
    const handleSubmit:FormEventHandler<HTMLFormElement> = (event) => {
        //ruft setlist auf (in Mainpage)
        const artikel:IArtikel={name: value}
        props.updateList(artikel)
        //leert value
        setValue("")
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Artikel:
                <input type="text"
                       value={value}
                       onChange={handleChange}
                />
            </label>
            <input type="submit" value="hinzufügen" />
        </form>
    );
}