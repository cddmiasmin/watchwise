import 'dotenv/config';

export const api = 'https://api.themoviedb.org/3/';
export const { 
    TMDB_API_KEY, 
    TMDB_ACCOUNT_ID, 
    TMDB_USERNAME, 
    TMDB_PASSWORD,
    SESSION_ID,
    TMDB_JOINT_WATCHLIST_ID
} = process.env
export const tmdb_header = {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`
}