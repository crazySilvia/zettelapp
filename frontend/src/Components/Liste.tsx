import "./Liste.css"
import React, {useContext, useEffect, useState} from "react";
import Artikel, {IArtikel} from "../Models/Artikel";
import {getAllArtikel} from "../Services/apiService";
import {AuthContext} from "../Context/AuthProvider";
import AddArtikelField from "./AddArtikelField";

export function Liste(){

    const [artikel, setArtikel] = useState<IArtikel[]>([]);
    const [artikelname, setArtikelname] = useState<string>("")
    const [anzahl, setAnzahl] = useState<number>(0)
    const {token} = useContext(AuthContext)

    useEffect(() => {
        getAllArtikel(token).then((data:IArtikel[]) =>setArtikel(data))
    });

    const deleteList = () => {

    }

    const deleteArtikel = () => {

    }

    //Todo minus implementieren
    const minusAnzahl = ()=>{

    }

    //todo plus implementieren
    const plusAnzahl = ()=>{

    }

    return(<div>
        <ul>{artikel.map((value: IArtikel, index: number) =>
            (<li>
                <Artikel artikel={value} buttondel={deleteArtikel}  buttonminus={minusAnzahl} buttonplus={plusAnzahl} index={index}/>
            </li>))}
        </ul>
        <AddArtikelField anzahl={anzahl} setAnzahl={setAnzahl} artikel={artikelname} setArtikel={setArtikelname} />
        <button onClick={deleteList}>Liste löschen</button>
     </div>)
}