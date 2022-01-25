import ".//Mainpage.css"
import Header from "../Components/Header";
import React, {useContext} from "react";
import NavBar from "../Components/NavBar";
import {AuthContext} from "../Context/AuthProvider";

export default function Mainpage(){

    const {jwtDecoded} = useContext(AuthContext)

    return(
        <div>
            <NavBar />
            <Header title="Zettel"/>
            <h2> Zettel von {jwtDecoded?.sub}</h2>
        </div>
    )
}