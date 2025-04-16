import { TMDB_ACCOUNT_ID } from '../tmdb.js';

import WatchlistService  from '../services/WatchlistService.js';

const WatchlistController = {

    async Watchlist(req, res) {
        try {
            const list = await WatchlistService.Watchlist(TMDB_ACCOUNT_ID);
            console.log(list);
            res.json(list);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    },

    async AddToWatchlist(req, res) {
        try {
            const movie = req.params.movie
            const list = await WatchlistService.AddToWatchlist(movie, TMDB_ACCOUNT_ID);
            console.log(movie, TMDB_ACCOUNT_ID);
            res.json(list);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    },

    async RemoveFromWatchlist(req, res) {
        try {
            const movie = req.params.movie
            const list = await WatchlistService.RemoveFromWatchlist(movie, TMDB_ACCOUNT_ID);
            console.log(movie, TMDB_ACCOUNT_ID);
            res.json(list);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    },
}

export default WatchlistController;