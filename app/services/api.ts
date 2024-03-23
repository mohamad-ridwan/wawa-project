import axios from "axios";

export const countryAPI = axios.create({
    baseURL: 'https://api.country.realm.chat'
})