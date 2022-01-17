import axios from "axios";
import {IArtikel} from "../Models/Artikel";

//In order to gain the TypeScript typings (for intellisense / autocomplete)
// while using CommonJS imports with require() use the following approach:
//const axios = require('axios').default;
const INDEV= process.env.NODE_ENV ==="development"
const BASEURL= INDEV ? "http://localhost:8080" : "";
export const getAllArtikel: ()=> Promise<IArtikel[]> = () =>
    axios.get(BASEURL+'/api/zettel').then(response => response.data)

export const postArtikel = (name: String) =>
    axios.post(BASEURL+'/api/zettel/addArtikel', {name: name})

//export const getArtikel = () =>
//     axios
//         .get("https://rickandmortyapi.com/api/character")
//         .then(response => response.data)