import { api, tmdb_header } from "../tmdb.js";

const SearchService = {

    async Movie(query) {
        const url = api + `search/movie?query=${query}&include_adult=true&language=pt-BR&page=1`;

        const response = await fetch(url, {
            method: 'GET',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },
    
    async Person(query) {
        const url = api + `search/person?query=${query}&include_adult=true&language=pt-BR&page=1`;

        const response = await fetch(url, {
            method: 'GET',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },

    async Multi(query) {
        const url = api + `search/multi?query=${query}&include_adult=true&language=pt-BR&page=1`;

        const response = await fetch(url, {
            method: 'GET',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },

};

export default SearchService;