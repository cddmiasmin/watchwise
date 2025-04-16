import { api, SESSION_ID, tmdb_header } from "../tmdb.js";

const ListService = {
    
    async MyLists(account_id) {
        const url = api + `account/${account_id}/lists?page=1&session_id=${SESSION_ID}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },

    async Details(listId) {
        const url = api + `list/${listId}?language=pt-BR&page=1`;

        const response = await fetch(url, {
            method: 'GET',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },

    async AddMovie(listId, movieId) {
        const url = api + `list/${listId}/add_item?session_id=${SESSION_ID}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                ...tmdb_header,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ media_id: movieId })
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },

    async RemoveMovie(listId, movieId) {
        const url = api + `list/${listId}/remove_item?session_id=${SESSION_ID}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                ...tmdb_header,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ media_id: movieId })
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },

    async Create(newList) {
        const url = api + `list?session_id=${SESSION_ID}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                ...tmdb_header,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ 
                ...newList,
                language: 'pt'
            })
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },

    async Clear(listId) {
        const url = api + `list/${listId}/clear?session_id=${SESSION_ID}&confirm=true`;

        const response = await fetch(url, {
            method: 'POST',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao buscar suas listas');
            
        const data = await response.json();
        return data;    
    },

    async Delete (listId) {
        const url = api + `list/${listId}?session_id=${SESSION_ID}`;

        const response = await fetch(url, {
            method: 'DELETE',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao excluir sua lista');
            
        const data = await response.json();
        return data;    
    }
};

export default ListService;