import "../Components/Liste.css"
import React, {useEffect, useState} from "react";
import Artikel, {IArtikel} from "./Artikel";
import {FormularListe} from "../services/FormularListe";
import {getAllArtikel} from "../services/api-service";

export function Liste(){
    //erstellt und aktualisiert Liste
    //da die Liste leer ist aber TypeScript Typen braucht, typecasten
    //wir hier das Array in ein Stringarray durch "as Array<string>"
    //const [artikel, setArtikel] = useState([] as Array<string>);

    const [artikel, setArtikel] = useState<IArtikel[]>([]);
    useEffect(() => {
        getAllArtikel().then((data:IArtikel[]) =>setArtikel(data))
    }, [])
    const updateArtikel = (newArtikel:IArtikel) => {
        //erstellt Kopie der Liste und
        //fügt neue Liste direkt hinzu
        const aktuellerStand:IArtikel[] = [...artikel, newArtikel];
        //setzt Liste auf aktuellem Stand
        setArtikel(aktuellerStand)
    }

    const deleteList = () => {
        setArtikel([])
    }

    //bei Klick auf löschen mache Folgendes
    const deleteArtikel = (index:number) => {
        //neues Array mit alten Daten
        let aktuelleListe = [...artikel]
        aktuelleListe.splice(index, 1)
        setArtikel(aktuelleListe)
    }

    return(<div>
             <FormularListe updateList={updateArtikel} />
             <ul>{artikel.map((value: IArtikel, index: number) =>
                 (<li key={index}>
                     <Artikel artikel={value} index={index} button={deleteArtikel} />
                 </li>))}
             </ul>
             <button onClick={deleteList}>Liste löschen</button>
     </div>)


}

//return(<div>
//             <FormularListe updateList={updateArtikel} />
//             <ul>{artikel.map((value: string, index: number) =>
//                 (<li key={index}>
//                     <Artikel name={value} anzahl={1} index={index} button={deleteArtikel} />
//                 </li>))}
//             </ul>
//             <button onClick={deleteList}>Liste löschen</button>
//     </div>
//     )