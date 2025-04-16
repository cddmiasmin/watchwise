import { TMDB_ACCOUNT_ID } from "../tmdb.js";

import ListService from "../services/ListService.js";

const ListController = {

    async MyLists(rep, res) {
        try {
            const lists = await ListService.MyLists(TMDB_ACCOUNT_ID);
            console.log(lists);
            res.json(lists);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async Details(rep, res) {
        try {
            const listId = rep.params.listId;
            const details = await ListService.Details(listId);
            console.log(details);
            res.json(details);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async AddMovie(rep, res) {
        try {
            const listId = rep.params.listId;
            const movieId = rep.params.movieId;
            const list = await ListService.AddMovie(listId, movieId);
            console.log(list);
            res.json(list);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async RemoveMovie(rep, res) {
        try {
            const listId = rep.params.listId;
            const movieId = rep.params.movieId;
            const list = await ListService.RemoveMovie(listId, movieId);
            console.log(list);
            res.json(list);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async Create (rep, res) {
        try {
            const newList = rep.body;
            const list = await ListService.Create(newList);
            console.log(list);
            res.json(list);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async Clear(rep, res) {
        try {
            const listId = rep.params.listId;
            const list = await ListService.Clear(listId);
            console.log(list);
            res.json(list);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    async Delete (rep, res) {
        try {
            const listId = rep.params.listId;
            const list = await ListService.Delete(listId);
            console.log(list);
            res.json(list);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },
};

export default ListController;