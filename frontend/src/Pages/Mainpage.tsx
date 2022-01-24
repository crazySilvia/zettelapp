import ".//Mainpage.css"
import Header from "../Components/Header";
import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar";
import {getAllLists} from "../Services/apiService";
import {AuthContext} from "../Context/AuthProvider";

export default function Mainpage(){

    const [lists,setLists] = useState()
    const {token, jwtDecoded} = useContext(AuthContext)

    useEffect( () => {
        updateLists().catch(e => console.log(e.message))
    })

    const updateLists = () => getAllLists(token).then(setLists)

    if (!lists){
        return(
            <div className="mainpage">
                <NavBar />
                <Header title="Zettel"/>
                //ToDo Bild einfügen
                <Link to="/login">Login</Link>
                <Link to="/register">Registrieren</Link>
            </div>
        )
    }return(
        <div>
            <NavBar />
            <Header title="Zettel"/>
            <h2> OrrA von {jwtDecoded?.sub}</h2>

        </div>
    )
}

//<AddListField/>
//<ListGallery lists={lists}/>