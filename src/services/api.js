import axios from 'axios';

export const key = '03e46ff0399482bdf341efde76b2fa21';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;