import { Router } from 'express';
const router = Router();

import AuthenticationController from './controllers/AuthenticationController.js';
import WatchlistController  from './controllers/WatchlistController.js';
import ListController from './controllers/ListController.js';
import SearchController from './controllers/SearchController.js';

router.get('/auth', AuthenticationController.CreateSession);

router.get('/watchlist', WatchlistController.Watchlist);
router.post('/watchlist/add/:movie', WatchlistController.AddToWatchlist);
router.post('/watchlist/remove/:movie', WatchlistController.RemoveFromWatchlist);

router.get('/list/mylists', ListController.MyLists);
router.get('/list/:listId', ListController.Details);
router.post('/list/add/:listId/:movieId', ListController.AddMovie);
router.post('/list/remove/:listId/:movieId', ListController.RemoveMovie);
router.post('/list/create', ListController.Create);
router.post('/list/clear/:listId', ListController.Clear);
router.delete('/list/delete/:listId', ListController.Delete);

router.get('/search/movie/:query', SearchController.Movie);
router.get('/search/person/:query', SearchController.Person);
router.get('/search/multi/:query', SearchController.Multi);

export default router;
