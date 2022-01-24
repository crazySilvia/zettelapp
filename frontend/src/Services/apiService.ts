import React from 'react';
import axios from "axios";
import {IArtikel} from "../Models/Artikel";
import {NewListDto} from "../Models/NewListDto";

export const getAllLists = (token?: string) =>
    axios.get("/api/lists", token?{headers:{"Authorization": "Bearer " + token}}:{})
        .then(response => response.data)

export const saveNewList = (listName: NewListDto, token?: string) =>
    axios.post("/api/lists", listName, token?{headers:{"Authorization": "Bearer " + token}}:{})
        .then(response => response.data)

export const getListByName = (listName: string | undefined, token?: string) =>
    axios.get(`/api/lists/${listName}`, token?{headers:{"Authorization": "Bearer " + token}}:{})
        .then(response => response.data)


//In order to gain the TypeScript typings (for intellisense / autocomplete)
// while using CommonJS imports with require() use the following approach:
//const axios = require('axios').default;
const INDEV= process.env.NODE_ENV ==="development"
const BASEURL= INDEV ? "http://localhost:8080" : "";
export const getAllArtikel: ()=> Promise<IArtikel[]> = () =>
    axios.get(BASEURL+'/api/zettel').then(response => response.data)

export const postArtikel = (name: String) =>
    axios.post(BASEURL+'/api/zettel/addArtikel', {name: name})

