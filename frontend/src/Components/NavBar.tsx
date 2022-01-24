import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {

    return (
        <div className={"navBar"}>
            <Link to={"/"}>
                <input type="button" value={"Startseite"} />
            </Link>
            <Link to={"/login"}>
                <input type="button" value={"Login"} />
            </Link>
            <Link to={"/register"}>
                <input type="button" value={"Registrieren"}/>
            </Link>
            <Link to={"/userpage"}>
                <input type="button" value={"Übersicht"}/>
            </Link>
        </div>
    )
}