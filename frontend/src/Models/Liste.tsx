import React from "react";


export interface IListe {
    id?: string;
    listName: string;
}

interface ListeProps{
    liste: IListe
    button: (item: string) => void
    index: number
}

export default function Liste(props:ListeProps){
    const {listName}=props.liste
    return(
        <p>
            {listName}{/* {props.id}*/}

            <button onClick={()=>props.button(listName)}>löschen</button>
        </p>
    )
}