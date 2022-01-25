import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {

    return (
        <div className={"navBar"}>
            <Link to={"/"}>
                <input type="button" value={"Start"} />
            </Link>
            <Link to={"/login"}>
                <input type="button" value={"Login"} />
            </Link>
            <Link to={"/list"}>
                <input type="button" value={"Zettel"}/>
            </Link>
        </div>
    )
}