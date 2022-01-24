
import React, {ChangeEvent, FormEvent, useContext, useState} from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import axios from "axios";
import {AuthContext} from "../Context/AuthProvider";

export default function LoginPage(){

    const[name, setName] = useState<string>()
    const [password, setPassword] = useState<string>()

   // const {setJwt} = useContext(AuthContext)

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    //const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    //         event.preventDefault()
    //         axios.post('/auth/login', {name, password})
    //             .then(response => response.data)
    //             .then((data) => {
    //                 setJwt(data)
    //             })
    //     }

    return(
        //1. Header
        //2. NavBar
        //3. LoginFormular

        <div className="loginpage">
            <Header title="Anmelden"/>
            <NavBar />
            <form>
                <input type="text" placeholder="Nutzername" onChange={onUserNameChange} value={name}/>
                <input type="password" placeholder="password" onChange={onPasswordChange} value={password}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}