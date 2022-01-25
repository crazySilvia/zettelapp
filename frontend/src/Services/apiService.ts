import axios, {AxiosResponse} from "axios";
import {IArtikel} from "../Models/Artikel";

export const getAllArtikel: (token?: string)=> Promise<IArtikel[]> = () =>
    axios.get('/api/artikel/zettel')
        .then(response => response.data)

export const getListByName = (listName: string | undefined, token?: string) =>
    axios.get(`/api/list/${listName}`, token?{headers:{"Authorization": "Bearer " + token}}:{})
        .then(response => response.data)

/**
 * Hier passiert der Login
 * @param userInput Login-Daten der User
 */
export const login = (userInput: { password: string | undefined; name: string | undefined }) =>
    axios.post("/auth/login", userInput)
        .then((response: AxiosResponse<string>) => response.data)