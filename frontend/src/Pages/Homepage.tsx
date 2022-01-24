import React from 'react';
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

export default function Homepage(){
    //gibt an, was auf der Mainpage rauskommt
    return(
        <div className="pages">
            <Header title="Startseite"/>
            <NavBar />
        </div>
    )
}