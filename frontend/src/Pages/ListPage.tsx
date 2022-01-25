import React from 'react';
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import {Liste} from "../Components/Liste";

export default function ListPage(){

    return(
        <div>
            <NavBar />
            <Header title="Zettel"/>
            <Liste />

        </div>
    )
}

//<AddArtikelField artikel={artikel} setArtikel={setArtikel} anzahl={anzahl} setAnzahl={setAnzahl} />