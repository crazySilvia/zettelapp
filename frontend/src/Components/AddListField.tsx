import React from 'react';
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {saveNewList} from "../Services/apiService";
import {NewListDto} from "../Models/NewListDto";
import {AuthContext} from "../Context/AuthProvider";

export default function AddListField(){
    const [input,setInput] = useState<string>("")
    const {token} = useContext(AuthContext)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newListDto: NewListDto = {
            listName:input
        }
        saveNewList(newListDto, token).catch(e => console.log(e.message))
        setInput("")
    }

    return(
        <form onSubmit={handleSubmit} >
            <div className="addList_input">
                <input type="text" onChange={handleChange} value={input}/>
            </div>
            <div className="addList_button">
                <button type={"submit"}>Add</button>
            </div>
        </form>
    )
}