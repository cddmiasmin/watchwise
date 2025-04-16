import { api, SESSION_ID, tmdb_header } from "../tmdb.js";                                                                                                                                                                                                                                                                                              

const WatchlistService = {

    async Watchlist(account_id) {
        const url = api + `account/${account_id}/watchlist/movies?language=pt-BR&page=1&session_id=${SESSION_ID}&sort_by=created_at.asc`;

        const response = await fetch(url, {
            method: 'GET',
            headers: tmdb_header
        });

        if (!response.ok) throw new Error('Erro ao buscar a watchlist');
         
        const data = await response.json();
        return data;     
    },

    async AddToWatchlist(movie, account_id) {
        const url = api + `account/${account_id}/watchlist?session_id=${SESSION_ID}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                ...tmdb_header,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                media_type: 'movie',
                media_id: movie,
                watchlist: true
            })
        });

        if (!response.ok) throw new Error('Erro ao adicionar filme na watchlist');
         
        const data = await response.json();
        return data;     
    },

    async RemoveFromWatchlist(movie, account_id) {
        const url = api + `account/${account_id}/watchlist?session_id=${SESSION_ID}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                ...tmdb_header,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                media_type: 'movie',
                media_id: movie,
                watchlist: false
            })
        });

        if (!response.ok) throw new Error('Erro ao remover filme na watchlist ao buscar a watchlist');
         
        const data = await response.json();
        return data;     
    }

};

export default WatchlistService;