import React from 'react';
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Context/AuthProvider";
import {getListByName} from "../Services/apiService";
import Header from "../Components/Header";
import AddArtikelFeld from "../Components/AddArtikelFeld";
import NavBar from "../Components/NavBar";
import AddListField from "../Components/AddListField";

export default function ListPage(){
    let params = useParams()

    const [list, setList] = useState<string[]>()
    const [artikel, setArtikel] = useState<string>("")
    const [anzahl, setAnzahl] = useState<number>(0)

    const {token} = useContext(AuthContext)

    useEffect(() => {
        loadItems().then(() => console.log(list)).catch(e => console.log(e.message))
    })

    const loadItems = () => getListByName(params.whichList, token).then(setList)

    if (!list){
        return(
            <AddListField />
        )
    }return(
        <div>
            <NavBar />
            <Header title="Zettel"/>

            <AddArtikelFeld artikel={artikel} setArtikel={setArtikel} anzahl={anzahl} setAnzahl={setAnzahl} />
        </div>
    )
}

//<ItemGallery/>